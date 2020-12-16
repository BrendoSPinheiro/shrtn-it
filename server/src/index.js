const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const server = express();

server.use(cors({
  origin: 'http://localhost:3000',
}));
server.use(express.json());
server.use(routes);

server.listen(PORT, () => {
  console.log('🔥 Server started');
});
