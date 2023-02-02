const { CustomAPIError } = require('../errors');
const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something Went Wrong Try Again Later',
    }
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.meddage })
    }
    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate Value Entered for ${err.keyValue} field,Please choose another Value`
        customError.statusCode = 400
    }
    return res.status(customError.statusCode).json({ msg: customError.msg });
}

module.exports = errorHandlerMiddleware;