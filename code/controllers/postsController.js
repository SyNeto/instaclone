const validationHandler = require('../validators/validationHandler');


exports.index = (req, res) => {
  // throw new Error('This is an error...');
  return res.json({message: 'Hello workd!'});
};

exports.create = (req, res, err) => {
  try{
    validationHandler(req);
    res.json({message: "Posted successfully"});
  } catch(err) {
    next(err);
  }
};
