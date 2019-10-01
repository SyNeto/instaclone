const express = require('express');
const postController = require('../controllers/post');
const { hasCaption } = require('../validations/validators');
const uploadImage = require('../middlewares/multer');
const router = express.Router();

// /api/posts
router.get('/', postController.list);
router.post('/', uploadImage('posts').single('image'), hasCaption, postController.create);

module.exports = router;

