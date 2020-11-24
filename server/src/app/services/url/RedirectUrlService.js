const UrlRepository = require('../../repositories/UrlRepository');

class RedirectUrlService {
  async execute(slug) {
    const url = await UrlRepository.findBySlug(slug);

    if (!url) {
      throw Error('url not found');
    }

    await UrlRepository.updateClick(url.id, (++url.count_click));

    return url;
  }
}

module.exports = RedirectUrlService;
