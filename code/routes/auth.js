const express = require('express');
const authController = require('../controllers/auth');
const passportJWT = require('../middlewares/passportJWT')()


const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.get('/me', passportJWT.authenticate(), authController.me);

module.exports = router;
