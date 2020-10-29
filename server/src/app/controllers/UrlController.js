const { nanoid } = require('nanoid');
const knex = require('../../database');
const UrlView = require('../view/UrlView');
const UrlRepository = require('../repositories/UrlRepository');

class UrlController {
  async index(req, res) {
    const { userId } = req;

    const urls = await UrlRepository.findByUserId(userId);

    res.json(UrlView.renderMany(urls));
  }

  async redirectUrl(req, res) {
    const { slug } = req.params;

    const url = await UrlRepository.findBySlug(slug);

    if (!url) {
      return res.status(400).json({ error: 'url not found' });
    }

    res.redirect(url.full_url);
  }

  async store(req, res) {
    const { userId } = req;
    let { title } = req.body;
    const { full_url } = req.body;

    if (!title) {
      title = full_url;
    }

    let slug;
    let slugExists;
    do {
      slug = nanoid(6);
      slugExists = await UrlRepository.findBySlug(slug);
    } while (slugExists);

    const data = {
      title,
      full_url,
      slug,
      user_id: userId,
    };

    const url = await UrlRepository.create(data);

    res.json(UrlView.renderMany(url));
  }
}

module.exports = new UrlController();
