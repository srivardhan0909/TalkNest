import { Router } from 'express';
const router = Router();
import authController from '../controllers/auth.js'; // Default import

const { login, signup, logout } = authController; // Destructure the functions

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

export default router;
