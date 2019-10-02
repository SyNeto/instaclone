const PostModel = require('../models/post');

exports.list = async (req, res, next) => {
    try {
        throw new Error('Un error random...');
        return res.json(await PostModel.find().exec());
    } catch(error) {
        next(error);
    }
    
}
