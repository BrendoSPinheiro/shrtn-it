const bcrypt = require('bcryptjs');

const UserRepository = require('../repositories/UserRepository');

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const userExists = await UserRepository.findByEmail(email);

    if (userExists) {
      return res.sendStatus(409);
    }

    const data = {
      name,
      email,
      password: await bcrypt.hash(password, 8),
    };

    const user = await UserRepository.create(data);

    res.json(user);
  }
}

module.exports = new UserController();
