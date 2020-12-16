const path = require('path');

console.log('USERRRR', process.env.DB_USER);
console.log('PORTT', process.env.DB_PORT);
console.log('HOST', process.env.DB_HOST);
console.log('DB', process.env.DB_DATABASE);
console.log('PASSWORD', process.env.DB_PASSWORD);
module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
};
