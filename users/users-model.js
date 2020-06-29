const db = require('../data/db-config.js')

module.exports = {
    addUser,
    getUserBy,
    edit,
    deleteUser,
    getUsers
}

function getUsers(){
    return db('users')
}

function addUser(user){
    return db('users')
    .returning('id')
    .insert(user)
    .then(([id]) => {
        return getUserBy({id})
    })
}

function getUserBy(filter){
    return db('users')
    .first()
    .where(filter)
}

function edit(id, changes) {
    console.log(id)
    return db('users').where({id}).update(changes)
    .then(() => {
        console.log(id)
        return getUserBy({id})
    })
}

function deleteUser(id){
    return db('users').where({id}).del();
}