const express = require('express')
const router = express.Router()
const { getSidebarUsers } = require('../controllers/user')
const { checkAuthCookie } = require('../middleware/auth')

router.get('/', checkAuthCookie('jwt'), getSidebarUsers)

module.exports = router
