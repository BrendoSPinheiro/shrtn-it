const knex = require('../../database');

class UserRepository {
  async findByEmail(email) {
    const user = await knex('users')
      .where('email', email)
      .first();

    return user;
  }

  async create(data) {
    const user = await knex('users')
      .returning(['id', 'name', 'email'])
      .insert(data);

    return user;
  }
}

module.exports = new UserRepository();
