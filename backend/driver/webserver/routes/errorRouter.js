function errorRouter(err, req, res, next) {
    return res.status(res?.statusCode ?? 500).json({ message:err.message })
}

module.exports = errorRouter