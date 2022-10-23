const bcrypt = require('bcrypt')

const compareHash = async (hashedPassword, plainPassword) => {
    try {
        const result = await bcrypt.compare(plainPassword, hashedPassword)
        return Promise.resolve(result)
    } catch(err) {
        console.log(err)
        return Promise.reject(err)
    }
}

module.exports = compareHash