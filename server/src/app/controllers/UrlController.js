const UrlView = require('../view/UrlView');
const UrlRepository = require('../repositories/UrlRepository');
const SlugGenerator = require('../Utils/SlugGenerator');

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

    await UrlRepository.updateClick(url.id, (url.count_click++));

    res.redirect(url.full_url);
  }

  async store(req, res) {
    const { userId } = req;
    const { title } = req.body;
    const { full_url } = req.body;

    const data = {
      title,
      full_url,
      slug: await SlugGenerator(),
      user_id: userId,
    };

    const url = await UrlRepository.create(data);

    res.json(UrlView.renderMany(url));
  }

  async delete(req, res) {
    const { id } = req.params;

    console.log(id);

    const urlExists = await UrlRepository.findById(id);

    if (!urlExists) {
      return res.status(400).json({ error: 'Url does not exists' });
    }

    await UrlRepository.delete(id);

    res.sendStatus(200);
  }
}

module.exports = new UrlController();
