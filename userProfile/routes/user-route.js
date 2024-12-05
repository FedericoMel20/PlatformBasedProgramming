const userController = require('../controllers/user-controller')

const express = require('express')

const router = express.Router()

router.get('/',userController.getAllUsers)

module.exports = router