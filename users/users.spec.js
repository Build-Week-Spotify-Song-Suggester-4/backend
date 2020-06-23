const request = require('supertest')
const db = require('./users-model')
const server = require('../server')

describe('users router', () => {
    it('GET /users returns a 200', async () => {
        let resStatus = await request(server)
            .get('/api/users')
            .then(res => res.status)
                 expect(resStatus).toEqual(200)
    })

    it('should return id 1', async () => {
        const res = await request(server)
            .get('/api/users/1')
                expect(res.body.id).toBe(1);
    });
});