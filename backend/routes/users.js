var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController')
var verifyToken = require('../middlewares/authorization')

router.post('/register', UserController.register)

router.post('/login', UserController.login)

router.post('/verificateCode', UserController.verificateCode)

router.get('/getUserInfo', verifyToken, UserController.getUserInfo)

router.get('/get', UserController.getUser)

router.get('/logout', UserController.logout)



module.exports = router;
