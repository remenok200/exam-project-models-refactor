const { MulterError } = require('multer');
const BadRequestError = require('../errors/BadRequestError');

module.exports = async (err, req, res, next) => {
  if (err instanceof MulterError) {
    return next(BadRequestError('Invalid file'));
  }

  next(err);
};
