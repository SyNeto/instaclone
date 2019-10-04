const PostModel = require('../models/post');
const validationHandler = require('../validations/validationHandler');

exports.list = async (req, res, next) => {
    try {
        return res.json(await PostModel.find({user: req.user._id}).exec());
    } catch(error) {
        next(error);
    }
}

exports.create = async (req, res, next) => {
    try {
        validationHandler(req);
        let post = new PostModel()
        post.caption = req.body.caption;
        post.image = req.file.filename;
        post.user = req.user._id;
        post = await post.save()
        return res.json(post);
    } catch (error) {
        next(error);
    }
}
