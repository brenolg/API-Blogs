const { verifyToken } = require('../auth/authFuncs');

const validateToken = (req, res, next) => {
    const token = req.header('Authorization');
     
    if (!token) {
    return res.status(401).json({ message: 'Token not found' });
    }

  try {
    const decoded = verifyToken(token);
    console.log(decoded);
    req.user = decoded;

     next();
  } catch (error) {
   return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;