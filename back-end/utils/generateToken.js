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
    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
};

export default generateTokenAndSetCookie;
