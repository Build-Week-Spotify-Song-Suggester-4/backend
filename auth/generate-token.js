const jwt = require('jsonwebtoken');

function genToken(user) {
    const jwtSecret = process.env.JWT_SECRET || 'keepitsecretandsafe';

    const payload = {
        user_id: user.id,
        username: user.username
    };

    const options = { expiresIn: '1d' };

    const signedToken = jwt.sign(payload, jwtSecret, options);

    return signedToken;

};

module.exports = genToken;