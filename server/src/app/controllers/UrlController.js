const UrlDto = require('../dto/UrlDto');
const UrlRepository = require('../repositories/UrlRepository');
const CreateUrlService = require('../services/url/CreateUrlService');

class UrlController {
  async index(req, res) {
    const { userId } = req;

    const urls = await UrlRepository.findByUserId(userId);

    res.json(UrlDto.renderMany(urls));
  }

  async redirectUrl(req, res) {
    const { slug } = req.params;

    const url = await UrlRepository.findBySlug(slug);

    if (!url) {
      return res.status(400).json({ error: 'url not found' });
    }

    await UrlRepository.updateClick(url.id, (++url.count_click));

    res.redirect(url.full_url);
  }

  async store(req, res) {
    try {
      const { userId } = req;
      const { title } = req.body;
      const { full_url } = req.body;

      const createUrl = new CreateUrlService();

      const url = await createUrl.execute({ title, full_url, userId });

      return res.json(UrlDto.renderMany(url));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    const urlExists = await UrlRepository.findById(id);

    if (!urlExists) {
      return res.status(400).json({ error: 'Url does not exists' });
    }

    await UrlRepository.delete(id);

    res.status(200).json({ OK: true });
  }
}

module.exports = new UrlController();
