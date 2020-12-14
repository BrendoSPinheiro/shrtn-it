const { isBefore, isAfter } = require('date-fns');
const UrlRepository = require('../../repositories/UrlRepository');

class RedirectUrlService {
  async execute(slug) {
    const url = await UrlRepository.findBySlug(slug);

    if (!url) {
      throw Error('url not found');
    }

    if (url.scheduling_type) {
      if (url.scheduling_type === 'date') {
        if (
          isBefore(Date.now(), url.start_expires_date)
          || isAfter(Date.now(), url.end_expires_date)
        ) {
          throw Error('this url is out of date');
        }
      }
    }

    await UrlRepository.updateClick(url.id, (++url.count_click));

    return url;
  }
}

module.exports = RedirectUrlService;
