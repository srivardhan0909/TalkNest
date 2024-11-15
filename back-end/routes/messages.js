const express = require('express')
const router = express.Router()
const { getMessage, sendMessage } = require('../controllers/messages');
const { checkAuthCookie } = require('../middleware/auth');

router.post('/send/:id' , checkAuthCookie('jwt'), sendMessage); 
router.get('/:id' , checkAuthCookie('jwt'), getMessage); 

module.exports = router