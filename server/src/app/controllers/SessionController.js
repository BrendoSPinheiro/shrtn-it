const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserView = require('../view/UserView');
const knex = require('../../database');
require('dotenv/config');

class SessionController {
  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await knex('users').where('email', email).first();

    if (!user) {
      return res.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({
      id: user.id,
    }, process.env.JWTSECRET, { expiresIn: '1d' });

    return res.json({
      user: UserView.render(user),
      token,
    });
  }
}

module.exports = new SessionController();
