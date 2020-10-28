exports.up = async (knex) => knex.schema.createTable('users', (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.string('email').unique().notNullable();
  table.string('password').notNullable();
});

exports.down = async (knex) => knex.schema.dropTable('users');
