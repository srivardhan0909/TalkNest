import pkg from 'jsonwebtoken';

const { verify } = pkg;

export const checkAuthCookie = (cookieName) => {
  return (req, res, next) => {
    // Try to get token from Authorization header first (for cross-origin)
    let token = null;
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    } else {
      // Fallback to cookie (for same-origin)
      token = req.cookies[cookieName];
    }
    
    if (!token) {
      console.log('No token found');
      return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
      const decoded = verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      return next();
    } catch (err) {
      console.log(err);
      return res.status(401).json({ message: 'Unauthorized' });
    }
  };
};
