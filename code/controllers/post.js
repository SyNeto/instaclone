const PostModel = require('../models/post');
const validationHandler = require('../validations/valiationHandler');

exports.list = async (req, res, next) => {
    try{
        return res.json(await PostModel.find().exec());
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try{
        validationHandler(req);
        let post = new PostModel();
        post.caption = req.body.caption;
        post.image = req.file.filename;
        post = await post.save();
        res.json(post);
    } catch(error) {
        next(error)
    }
};
