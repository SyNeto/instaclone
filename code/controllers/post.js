const PostModel = require('../models/post');

exports.list = async (req, res) => {
    return res.json(await PostModel.find().exec());
}
