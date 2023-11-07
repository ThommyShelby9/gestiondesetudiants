var express = require('express');
var router = express.Router();
var verifyToken = require('../middlewares/authorization')

router.get('/', verifyToken,  function (req, res, next){
    const user = req.user
    res.status(200).send(user)
})

module.exports = router