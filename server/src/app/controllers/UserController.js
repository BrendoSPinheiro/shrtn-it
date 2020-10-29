const bcrypt = require('bcryptjs');
const Yup = require('yup');

const UserRepository = require('../repositories/UserRepository');

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!await schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Validation fails' });
    }

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
