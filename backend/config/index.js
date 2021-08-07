module.exports = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000,
    db: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST
    },
    testDb: {
        username: process.env.TESTDB_USERNAME,
        password: process.env.TESTDB_PASSWORD,
        database: process.env.TESTDB_DATABASE,
        host: process.env.TESTDB_HOST
    },
    jwtConfig: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
};