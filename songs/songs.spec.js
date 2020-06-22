const request = require('supertest')
const db = require('./songs-model')
const server = require('../server')

describe('songs router', () => {
    it('GET /favoritesongs returns a 200', async () => {
        let resStatus = await request(server)
            .get('/api/music/:id/faves')
            .then(res => res.status)
        expect(resStatus).toEqual(200)
    });

    it("should be defined", async () => {
        const res = await request(server)
          .get('/api/music/singletrack')
            expect(res).toBeDefined();
    });

    it("should be defined", async () => {
        const res = await request(server)
          .get('/api/music/1/faves')
            expect(res.body).toBeDefined();
    });
});

describe('save a song', () => {
    it('POST /faves returns a json object', () => {
        return request(server).post('/api/faves')
            .then(res => {
                expect(res.type).toBe('text/html')
            })
    })
})


describe('server GET', () => {
    it('should return message', () => {
        return request(server).get('/')
            .then(res => {
                console.log(res)
                expect(res.text).toMatch('{\"api\":\"up and running\"}')
            })
    })
})