const UrlRepository = require('../../repositories/UrlRepository');

class DeleteUrlService {
  async execute(id) {
    const urlExists = await UrlRepository.findById(id);

    if (!urlExists) {
      throw Error('Url does not exists');
    }

    await UrlRepository.delete(id);
  }
}

module.exports = DeleteUrlService;
