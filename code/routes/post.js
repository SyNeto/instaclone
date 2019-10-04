const express = require('express');
const postController = require('../controllers/post');
const { hasCaption } = require('../validations/validators');
const imageUpload = require('../middlewares/multer');
const passportJWT = require('../middlewares/passportJWT')()
const router = express.Router();

// /api/posts
router.get('/', passportJWT.authenticate(), postController.list);
router.post('/',
    passportJWT.authenticate(),
    imageUpload('posts').single('image'),
    hasCaption, postController.create);

module.exports = router;

