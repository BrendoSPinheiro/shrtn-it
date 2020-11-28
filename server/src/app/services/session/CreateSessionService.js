const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserRepository = require('../../repositories/UserRepository');

class CreateSessionService {
  async execute({ email, password }) {
    const user = await UserRepository.findByEmail(email);

    if (!user) {
      throw Error('User does not exists');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw Error('Invalid password');
    }

    const token = jwt.sign({
      id: user.id,
    }, process.env.JWTSECRET, { expiresIn: '1d' });

    return {
      user,
      token,
    };
  }
}

module.exports = CreateSessionService;
