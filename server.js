const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const userRouter = require('./users/users-router');
const musicRouter = require('./songs/songs-router');
const authenticator = require('./auth/authenticator.js')

const server = express();

// global middleware
server.use(express.json());
server.use(helmet());
server.use(cors());

//server configuration
server.use('/auth', authRouter);
server.use('/users', userRouter);
server.use('/music', musicRouter);


server.get('/', (req, res) => {
    res.json({ api: 'up and running' });
});

module.exports = server;