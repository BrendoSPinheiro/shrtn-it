const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3001, () => {
  console.log('🔥 Server started at http://localhost:3001');
});
