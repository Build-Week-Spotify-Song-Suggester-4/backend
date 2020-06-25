const db = require('../data/db-config');

module.exports = {
    find,
    findBy,
    findById,
    addUser,
    deleteUser
};

function find() {
    return db('users').select('id', 'username', 'password');
};

function findBy(filter) {
    return db('users').where(filter).first();
};

function findById(id) {
    return db('users').where({ id }).first().select('id', 'username', 'password');
};

function addUser(user) {
    return db('users').returning("id").insert(user)
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
};

function deleteUser(id) {
    return db('users').where({ id }).del();
}
