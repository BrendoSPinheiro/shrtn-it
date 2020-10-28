const { nanoid } = require('nanoid');
const knex = require('../../database');
const UrlView = require('../view/UrlView');

class UrlController {
  async index(req, res) {
    const urls = await knex('urls');

    res.json(UrlView.renderMany(urls));
  }

  async redirectUrl(req, res) {
    const { slug } = req.params;

    const url = await knex('urls').where('slug', slug).first();

    if (!url) {
      return res.status(400).json({ error: 'url not found' });
    }

    res.redirect(url.full_url);
  }

  async store(req, res) {
    let { title } = req.body;
    const { full_url } = req.body;

    if (!title) {
      title = full_url;
    }

    let slug;
    let urlExists;

    do {
      slug = nanoid(6);
      urlExists = await knex('urls')
        .where('slug', slug)
        .first();
    } while (urlExists);

    const data = {
      title,
      full_url,
      slug,
    };

    const url = await knex('urls')
      .returning(['id', 'title', 'slug'])
      .insert(data);

    res.json(UrlView.renderMany(url));
  }
}

module.exports = new UrlController();
