const jwt = require('jsonwebtoken');
const config = require('../../config');

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido' });
  }
  jwt.verify(token, config.jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token de autenticação inválido' });
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
