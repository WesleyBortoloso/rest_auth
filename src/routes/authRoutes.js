const express = require('express');
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/protected', authenticateToken, authController.protectedResource);

module.exports = router;
