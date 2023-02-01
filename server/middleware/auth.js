const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');
const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError('No Tokken Provided')
    }
    const token = authHeader.split(' ')[1]
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        req.user = { id, username }
        next()
    } catch (error) {
        throw new UnauthenticatedError('Not Authorized To Access This Route')
    }
}

module.exports = authenticationMiddleware;

