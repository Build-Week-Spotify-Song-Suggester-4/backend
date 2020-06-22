const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const userRouter = require('./users/users-router');
const musicRouter = require('./songs/songs-router');

const server = express();

// global middleware
server.use(express.json());
server.use(helmet());
server.use(cors());

//server configuration
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/music', musicRouter);


server.get('/', (req, res) => {
    res.json({ api: 'up and running' });
});

module.exports = server;