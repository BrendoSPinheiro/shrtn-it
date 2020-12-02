const UrlDto = require('../dto/UrlDto');

const ListUrlService = require('../services/url/ListUrlService');
const DetailUrlService = require('../services/url/DetailUrlService');
const RedirectUrlService = require('../services/url/RedirectUrlService');
const CreateUrlService = require('../services/url/CreateUrlService');
const DeleteUrlService = require('../services/url/DeleteUrlService');

class UrlController {
  async index(req, res) {
    const { userId } = req;

    const listUrl = new ListUrlService();

    const urls = await listUrl.execute(userId);

    res.json(UrlDto.renderMany(urls));
  }

  async show(req, res) {
    const { id } = req.params;

    const detailUrl = new DetailUrlService();

    const url = await detailUrl.execute(id);

    res.json(UrlDto.render(url));
  }

  async redirectUrl(req, res) {
    try {
      const { slug } = req.params;

      const redirectUrl = new RedirectUrlService();

      const url = await redirectUrl.execute(slug);

      res.redirect(url.full_url);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
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
    try {
      const { id } = req.params;

      const deleteUrl = new DeleteUrlService();

      await deleteUrl.execute(id);

      res.status(200).json({ OK: true });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UrlController();
