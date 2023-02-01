const CustomAPIError = require('./custom-error');
const { StatusCodes } = require('http-status-codes');
class BadRequest extends CustomAPIError {
    constructor(message) {
        super(message)
        this.StatusCode = StatusCodes.BAD_REQUEST
    }
}
module.exports = BadRequest;