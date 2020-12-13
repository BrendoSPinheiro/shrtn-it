const knex = require('../../database');

class UrlRepository {
  async findById(id) {
    const url = await knex('urls')
      .where('id', id)
      .first();

    return url;
  }

  async findByUserId(id) {
    const urls = await knex('urls')
      .where('user_id', id);

    return urls;
  }

  async findBySlug(slug) {
    const url = await knex('urls')
      .where('slug', slug)
      .first();

    return url;
  }

  async create(urlData) {
    const url = await knex('urls')
      .returning([
        'id',
        'title',
        'slug',
        'start_expires_date',
        'end_expires_date',
      ])
      .insert(urlData);

    return url;
  }

  async updateClick(id, count_click) {
    await knex('urls')
      .where('id', id)
      .update({ count_click });
  }

  async delete(id) {
    await knex('urls').where('id', id).del();
  }
}

module.exports = new UrlRepository();
