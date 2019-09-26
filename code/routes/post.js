const express = require('express');
const postController = require('../controllers/post');
const router = express.Router();

// /api/posts
router.get('/', postController.list);

module.exports = router;

