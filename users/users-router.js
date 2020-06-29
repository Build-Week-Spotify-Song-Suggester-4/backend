const router = require('express').Router();

const Users = require('./users-model');

//'/api/users'
router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.status(500).json({ message: 'Unable to retreive list of users', error: err }))
});

//'/api/users/:id'
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Users.findById(id) 
        .then(user => {
            if(user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'Unable to find user' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to retreive user', error: err })
        })
});

//'/api/users/:id'
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Users.deleteUser(id) 
        .then(user => {
            if(user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'Unable to find user' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to retreive user', error: err })
        })
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const changes = req.body
    Users.edit(id, changes)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

module.exports = router;