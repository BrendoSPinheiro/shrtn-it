const express = require('express');
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3001, () => {
  console.log('🔥 Server started at http://localhost:3001');
});
