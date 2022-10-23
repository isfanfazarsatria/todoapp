const JWTVerify = require("../../../utils/JWTVerify")

const isAuthenticated = async (req, res, next) => {
    try {
        const decoded = await JWTVerify(req.headers.auth)
        res.locals.decodedToken = decoded
        return next()
    } catch(err) {
        res.status(401)
        return next(err)
    }
}

module.exports = isAuthenticated