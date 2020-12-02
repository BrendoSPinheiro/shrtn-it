const UrlRepository = require('../../repositories/UrlRepository');

class DetailUrlService {
  async execute(id) {
    const url = await UrlRepository.findById(id);

    return url;
  }
}

module.exports = DetailUrlService;
