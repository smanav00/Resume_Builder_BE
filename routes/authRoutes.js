const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/protected', verifyToken, AuthController.protected);
router.get('/resumedata', verifyToken, AuthController.getBiodata);
router.post('/resumedata', verifyToken, AuthController.storeBiodata);

module.exports = router;
