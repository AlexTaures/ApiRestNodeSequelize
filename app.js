const Server = require('./server/server.js');
require('dotenv').config();

const server = new Server();

server.listen();
