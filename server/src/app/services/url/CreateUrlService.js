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
    start_hour,
    end_hour,
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
      if (scheduling_type === 'date') {
        if (isBefore(end_expires_date, start_expires_date)) {
          throw Error('Start date greater then end date');
        }

        if (
          isBefore(start_expires_date, Date.now())
          && isBefore(end_expires_date, Date.now())
        ) {
          throw Error('Start date or end date greater then current date');
        }

        data = {
          title,
          full_url,
          slug: await SlugGenerator(),
          scheduling_type,
          start_expires_date,
          end_expires_date,
          user_id: userId,
        };
      } else if (scheduling_type === 'hour') {
        if (start_hour < 0 || !end_hour) {
          throw Error('Hour is required');
        }

        if (start_hour === end_hour) {
          throw Error('the start time cannot be the same as the end time');
        }

        if (end_hour < start_hour) {
          throw Error('Start hour greater then end hour');
        }

        data = {
          title,
          full_url,
          slug: await SlugGenerator(),
          scheduling_type,
          start_expires_hour: addHours(Date.now(), start_hour),
          end_expires_hour: addHours(Date.now(), end_hour),
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
