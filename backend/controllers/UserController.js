const UserModel = require("../models/users");
const bcrypt = require("bcryptjs");
const Mail = require("../facades/mail");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.ACCESS_TOKEN_SECRET;
const Counter = require("../models/counter");
const { now } = require("mongoose");

async function getNextSequenceValue(sequenceName) {
  const sequenceDocument = await Counter.findOneAndUpdate(
    { id: Counter },
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true }
  );

  return sequenceDocument.sequence_value;
}

async function register(req, res, next) {
  const id = await getNextSequenceValue("userId");
  const randomCode = Mail.generateRandomCode();
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = new UserModel({
    id: id,
    nameEtab: req.body.nameEtab,
    email: req.body.email,
    tel: req.body.tel,
    password: hashedPassword,
    verificationCode: randomCode,
    emailVerify: false,
    emailVerifyAt: ""
  });

  try {
    const user = await newUser.save();

    await Mail.to(req.body.email).send(
      `Hello ${req.body.nameEtab}, voici votre code de vérification ${randomCode}`,
      "Vérification de votre identité!"
    );

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

async function getUser(req, res, next) {
  const users = await UserModel.find();
  res.status(200).send(users);
}

async function verificateCode(req, res, next) {
  const enteredCode = req.body.verificationCode;

  try {
    const user = await UserModel.findOne({ verificationCode: enteredCode });
    if (!user) {
      return res.status(400).json({ message: "Utilisateur non trouvé" });
    } else {
      const verifyUser = await UserModel.findOneAndUpdate({
        emailVerify: true,
        emailVerifyAt: now()
      })
      return res
        .status(200)
        .send(user)
        .json({ message: "Adresse email confimé!" });
    }
  } catch (error) {
    console.error(error);
  }
}

async function login(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const User = await UserModel.findOne({ email: email });

  try {
    const user = User;
    console.log(User);

    if (!user) {
      return res.status(401).json({ message: "Identifiants incorrects" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign({ id: user.id, name: user.nameEtab }, secretKey, {
        expiresIn: "1h",
      });
      req.token = token;
      console.log("token", token);
      res.status(200).send({ token: token });
    } else {
      res.status(401).json({ message: "Identifiants incorrects" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'authentification" });
  }
}

const getUserInfo = async (req, res, next) => {
  console.log(req.user);
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Accès refusé!" });
    }

    const user = {
      nameEtab: req.user.nameEtab,
      email: req.user.email,
      tel: req.user.tel,
    };

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message:
          "Erreur lors de la récupération des informations de l'utilisateur",
      });
  }
};

async function logout(req, res) {
  try {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ error: 'Échec de la déconnexion' });
      } else {
        res.json({ message: 'Déconnexion réussie' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la déconnexion' });
  }
} 
module.exports = { register, getUser, login, verificateCode, getUserInfo, logout };
