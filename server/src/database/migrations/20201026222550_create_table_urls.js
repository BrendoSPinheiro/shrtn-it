exports.up = async (knex) => knex.schema.createTable('urls', (table) => {
  table.increments('id').primary();
  table.string('title').notNullable();
  table.string('full_url').notNullable();
  table.string('slug').notNullable();
  table.integer('count_click').default(0).notNullable();
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = async (knex) => knex.schema.dropTable('urls');
