const Users = require('../models/user');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');
const register = async (req, res) => {
    const user = await Users.create({ ...req.body });
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({
        user: user.name
    }, token)
}
const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new BadRequestError('Please Provide Email and Password');
    }
    const user = await Users.findOne({ email });
    if (!user) {
        throw new UnauthenticatedError('Invalid Credential');
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid Credential');
    }
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({
        user: { name: user.name }, token
    });
}
module.exports = { register, login };