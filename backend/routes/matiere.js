var express = require('express');
var router = express.Router();
const MatiereController = require('../controllers/MatiereController')

router.get('/', MatiereController.getMatiere)

module.exports = router