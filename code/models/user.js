const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


schema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true, select: false},
    firstName: String,
    lastName: String,
});

schema.methods.encryptPassword = async password => {
    try{
        const salt = await bcrypt.genSaltSync(5);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch(err) {
        console.log(err);
    }
}

schema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.password);
    return result;
}

module.exports = mongoose.model('User', schema);