const express = require('express');
const { check } = require('express-validator');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', [
    check('username', 'Username is required').notEmpty(),
    check('password', 'Password is required').isLength({ min: 6 }),
], register);

router.post('/login', [
    check('username', 'Username is required').notEmpty(),
    check('password', 'Password is required').exists(),
], login);

module.exports = router;
