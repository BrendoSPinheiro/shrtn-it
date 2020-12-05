const UrlRepository = require('../../repositories/UrlRepository');

class ListUrlService {
  async execute(userId) {
    const urls = await UrlRepository.findByUserId(userId);

    return urls;
  }
}

module.exports = ListUrlService;
