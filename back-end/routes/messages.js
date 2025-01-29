import { Router } from 'express';
const router = Router()
import { getMessage, sendMessage } from '../controllers/messages.js';
import { checkAuthCookie } from '../middleware/auth.js';

router.post('/send/:id' , checkAuthCookie('jwt'), sendMessage); 
router.get('/:id' , checkAuthCookie('jwt'), getMessage); 

export default router