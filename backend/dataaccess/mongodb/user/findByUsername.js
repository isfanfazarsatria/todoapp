const UserModel = require('../../../database/mongodb/schemas/userSchema')

const findByUsername = async (username) => {
    try {

        const user = await UserModel.findOne({ username }, 'username password').exec()
        return Promise.resolve(user)
    } catch(err) {
        return Promise.reject(err)
    }
}

module.exports = findByUsername