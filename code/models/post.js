const mongoose = require('mongoose');


const schema = mongoose.Schema({
    caption: {type: String, required: true},
    image: {type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model('Post', schema);