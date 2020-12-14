const Yup = require('yup');
const { isBefore, addHours } = require('date-fns');

const UrlRepository = require('../../repositories/UrlRepository');
const SlugGenerator = require('../../utils/SlugGenerator');
const checkUrlAvailability = require('../../utils/checkUrlAvailability');

class CreateUrlService {
  async execute({
    title,
    full_url,
    userId,
    scheduling_type,
    start_expires_date,
    end_expires_date,
    hour,
  }) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      full_url: Yup.string().url().required(),
    });

    if (!await schema.isValid({
      title,
      full_url,
    })) {
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

    let data;

    if (scheduling_type) {
      if (isBefore(end_expires_date, start_expires_date)) {
        throw Error('Start date greater then end date');
      }

      if (
        isBefore(start_expires_date, Date.now())
        && isBefore(end_expires_date, Date.now())
      ) {
        throw Error('Start date or end date greater then current date');
      }

      if (scheduling_type === 'date') {
        data = {
          title,
          full_url,
          slug: await SlugGenerator(),
          scheduling_type,
          start_expires_date,
          end_expires_date,
          user_id: userId,
        };
      } else {
        data = {
          title,
          full_url,
          slug: await SlugGenerator(),
          scheduling_type,
          end_expires_date: addHours(Date.now(), hour),
          user_id: userId,
        };
      }
    } else {
      data = {
        title,
        full_url,
        slug: await SlugGenerator(),
        user_id: userId,
      };
    }

    const url = await UrlRepository.create(data);

    return url;
  }
}

module.exports = CreateUrlService;
