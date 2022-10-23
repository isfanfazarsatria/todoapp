const config = {
    port: 8000,
    host: 'localhost',
    mongoURI : 'your cluster mongo setup',
    JWTSecretKey: 'Random This Secret Key',
    JWTExpires: 60 * 60 * 24 * 3 //3days 
}

module.exports = config