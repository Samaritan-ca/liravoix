const jwt = require('jsonwebtoken');
const JWT_SECRET = 'my-hardcoded-secret';

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    consolge.log('Decoded token:', decoded);
    req.user_id = decoded.user_id;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};