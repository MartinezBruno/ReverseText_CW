
const express = require('express')
const router = express.Router()

const getReverseText = require('../controllers/reverseText')

router.get('/reverseText', getReverseText)

module.exports = router