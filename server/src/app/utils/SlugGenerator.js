const { nanoid } = require('nanoid');
const UrlRepository = require('../repositories/UrlRepository');

module.exports = async function SlugGenerator() {
  let slug;
  let slugExists;
  do {
    slug = nanoid(6);
    slugExists = await UrlRepository.findBySlug(slug);
  } while (slugExists);

  return slug;
};
