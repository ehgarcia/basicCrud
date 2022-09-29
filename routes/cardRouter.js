var express = require('express');
var router = express.Router();
const cardController = require('../controller/cardController')

router.get('/create', cardController.create)
router.get('/delete', cardController.delete)

module.exports = router