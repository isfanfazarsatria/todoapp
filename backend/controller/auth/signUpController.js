const UserEntity = require('../../entities/userEntity')
const signUpUseCase = require('../../usecase/auth/signUpUseCase')

const signUpController = async (req, res, next) => {
    const user = new UserEntity()
    user.username = req.body.username
    user.password = req.body.password

    try {
        const credentials = await signUpUseCase(user)
        return res.status(201).json({
            message: `new user is created`, credentials
        })
    } catch (err) {
        return next(err)
    }
}

module.exports = signUpController