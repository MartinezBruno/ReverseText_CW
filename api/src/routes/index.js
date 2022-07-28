const express = require('express')
const router = express.Router()

const reverseText = require('./reverseText')

router.use('/', reverseText)

module.exports = router
