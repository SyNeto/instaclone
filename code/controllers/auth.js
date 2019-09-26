const jwt = require("jwt-simple");
const config = require('../config');
const UserModel = require('../models/user');

exports.signUp = async (req, res, next) => {
    const userExists = await UserModel.findOne({username: req.body.username})
    if(userExists) {
        const error = new Error('Username already exists.');
        error.statusCode = 403;
        throw error;
    }

    let user = new UserModel();
    user.username = req.body.username;
    user.password = await user.encryptPassword(req.body.password);
    user.firstName = req.body.firstName ? req.body.firstName : '';
    user.lastName = req.body.lastName ? req.body.lastName : '';
    await user.save()

    const token = jwt.encode({id: user.id}, config.JWTSecret);
    return res.json({user, token})
}

exports.login = async (req, res, next) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await UserModel.findOne({username}).select('+password');
        if(!user) {
            const error = new Error('Wrong Credentials');
            error.statusCode = 401;
            throw error;
        }
        const validPassword = await user.checkPassword(password);
        if(!validPassword) {
            const error = new Error('Wrong Credentials')
            error.statusCode = 401;
            throw error;
        }
        const token = jwt.encode({id: user.id}, config.JWTSecret)
        return res.json({user, token});
    } catch(err) {
        // next(err);
        console.log(err);
    }
};

exports.me = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.user);
        return res.json(user);
    } catch(err) {
        // next(err);
        console.log(err);
    }
}