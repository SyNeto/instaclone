const express = require('express');
const postController = require('../controllers/post');
const { hasCaption } = require('../validations/validators');
const imageUpload = require('../middlewares/multer');
const router = express.Router();

// /api/posts
router.get('/', postController.list);
router.post('/', imageUpload('posts').single('image'), hasCaption, postController.create);

module.exports = router;

