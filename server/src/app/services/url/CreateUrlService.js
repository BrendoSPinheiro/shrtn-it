const Yup = require('yup');

const UrlRepository = require('../../repositories/UrlRepository');
const SlugGenerator = require('../../utils/SlugGenerator');
const checkUrlAvailability = require('../../utils/checkUrlAvailability');

class CreateUrlService {
  async execute({ title, full_url, userId }) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      full_url: Yup.string().url().required(),
    });

    if (!await schema.isValid({ title, full_url })) {
      throw Error('Validation fails');
    }

    if (!title) {
      title = full_url;
    }

    try {
      await checkUrlAvailability(full_url);
    } catch (error) {
      throw Error(error.message);
    }

    const data = {
      title,
      full_url,
      slug: await SlugGenerator(),
      user_id: userId,
    };

    const url = await UrlRepository.create(data);

    return url;
  }
}

module.exports = CreateUrlService;
