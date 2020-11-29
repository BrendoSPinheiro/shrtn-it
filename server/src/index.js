const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('dotenv/config');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3001, () => {
  console.log('🔥 Server started at http://localhost:3001');
});
