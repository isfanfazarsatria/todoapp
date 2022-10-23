const cors = require('cors')
const helmet = require('helmet')
const express = require('express')

const routeNotFound = require('./routes/routeNotFound')
const errorRouter = require('./routes/errorRouter')
const v1Routes = require('./routes/v1')

function Server() {
    this.app = express()
    return this
}

Server.prototype.listen = function(PORT,HOST) {
    this.app.listen(PORT, HOST, () => console.log(`Server running on http://${HOST}:${PORT}`))
    return this
}

Server.prototype.start = function() {
    this.app.use(cors('*'))
    this.app.use(helmet())
    this.app.use(express.json())

    /**
     * route settings
     */

    this.app.use(v1Routes)
    this.app.use('*', routeNotFound)
    this.app.use(errorRouter)
}

module.exports = Server