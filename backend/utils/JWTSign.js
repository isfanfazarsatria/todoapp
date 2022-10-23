const jwt = require('jsonwebtoken')
const { JWTSecretKey, JWTExpires } = require('../config')

const JWTSign = (username, id) => new Promise((resolve, reject) => {
    jwt.sign(
        { username, _id: id }, 
        JWTSecretKey, 
        { expiresIn: JWTExpires, algorithm: 'HS384' }, 
        (err, token) => {
            if(err) return reject(err)
            return resolve(token)
        }
    )    
})

module.exports = JWTSign