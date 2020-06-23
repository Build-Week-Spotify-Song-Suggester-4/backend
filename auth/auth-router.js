const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model');
const genToken = require('./generate-token');


//'/api/auth/register'
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 6);
    user.password = hash;

    Users.addUser(user)
        .then(newUser => {
            res.status(201).json(newUser);
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to add user', error: err })
        })
});

//'/api/auth/login'
router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = genToken(user);
                res.json({ message: `Hello, ${username}`, user_id: user.id, token: token })
            } else {
                res.status(401).json({ message: 'Invalid credentials' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to login', error: err })
        })
});

module.exports = router;