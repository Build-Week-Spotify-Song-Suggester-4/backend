const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const jwtSecret = process.env.JWT_SECRET || 'keepitsecretandsafe';
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ message: 'Invalid credentials', error: err })
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({ message: 'Not authorized' })
    }
};