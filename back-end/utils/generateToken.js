import pkg from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { sign } = pkg;

const generateTokenAndSetCookie = (userId, res) => {
    const token = sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
    
    // Cookie options for cross-origin requests (production)
    const cookieOptions = {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    };
    
    res.cookie('jwt', token, cookieOptions);
};

export default generateTokenAndSetCookie;
