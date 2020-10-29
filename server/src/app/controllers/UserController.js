const bcrypt = require('bcryptjs');
const Yup = require('yup');

const knex = require('../../database');

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

    const userExists = await knex('users').where('email', email).first();

    if (userExists) {
      return res.sendStatus(409);
    }

    const data = {
      name,
      email,
      password: await bcrypt.hash(password, 8),
    };

    const user = await knex('users')
      .returning(['id', 'name', 'email'])
      .insert(data);

    res.json(user);
  }
}

module.exports = new UserController();
