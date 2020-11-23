const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserDto = require('../dto/UserDto');
const UserRepository = require('../repositories/UserRepository');

class SessionController {
  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await UserRepository.findByEmail(email);

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
      user: UserDto.render(user),
      token,
    });
  }
}

module.exports = new SessionController();
