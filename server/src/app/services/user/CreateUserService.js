const bcrypt = require('bcryptjs');
const Yup = require('yup');

const UserRepository = require('../../repositories/UserRepository');

class CreateUrlService {
  async execute({ name, email, password }) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!await schema.isValid({ name, email, password })) {
      throw Error('Validation fails');
    }

    const userExists = await UserRepository.findByEmail(email);

    if (userExists) {
      throw Error('User already exists');
    }

    const data = {
      name,
      email,
      password: await bcrypt.hash(password, 8),
    };

    const user = await UserRepository.create(data);

    return user;
  }
}

module.exports = CreateUrlService;
