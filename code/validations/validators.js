const {body} = require('express-validator');

exports.hasCaption = body('caption')
    .isLength({max: 140})
    .withMessage('Name is required, max 140 characters.');