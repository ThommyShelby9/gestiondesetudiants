/* function basicAuth(req, res, next) {
    const identifiants64 = "username:password"
    const identif = btoa(identifiants64)
     const authHeader = req.headers.authorization 
     const b64 = Buffer.from(identifiants64).toString("base64") 
   console.log(identif)
   const authorization = 'Basic '+identif
   console.log(atob(identif))
   console.log(authorization)
   //fin frontend
   const token = authorization.split(' ')[1]
   const [username, password] = atob(token).split(':')
   
   if(username==identifiants64.username && password==identifiants64.password){
    next()
   }else{
    res.status(401).send('Invalid username or password')
   }
}

module.exports = basicAuth */

const jwt = require("jsonwebtoken");
require("dotenv").config();


const secretKey = process.env.ACCESS_TOKEN_SECRET;

function verifyToken(req, res, next) {
   /*  const token = req.header['authorization']

    if (!token) {
        return res.status(401).send({ message: 'Accès non autorisé' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; 
        next(); 
    } catch (error) {
        console.error(error);
        return res.status(403).send({ message: error });
    } */

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token){
      return res.status(401).json({message: 'Accès refusé!'})
    }
    jwt.verify(token, secretKey, {noTimestamp: true},(err, user)=>{
        if(err){
            return res.status(403).json({message: 'Token invalide!'})
        }
        req.user = user
        console.log(req.user)
        next()
    })
}

module.exports = verifyToken;


 

