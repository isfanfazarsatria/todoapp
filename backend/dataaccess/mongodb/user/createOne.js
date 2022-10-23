const UserModel = require('../../../database/mongodb/schemas/userSchema')

const createOne = async(data) => {
    const user = new UserModel()
    user.username = data.username
    user.password =  data.password

    try {
        const res = await user.save()
        return Promise.resolve(res)
    } catch (err) {
        return Promise.reject(err)
    }
}

module.exports = createOne