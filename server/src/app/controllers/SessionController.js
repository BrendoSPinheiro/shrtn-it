const CreateSessionService = require('../services/session/CreateSessionService');
const UserDto = require('../dto/UserDto');

class SessionController {
  async authenticate(req, res) {
    try {
      const { email, password } = req.body;

      const createSession = new CreateSessionService();

      const user = await createSession.execute({ email, password });

      return res.json({
        user: UserDto.render(user.user),
        token: user.token,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new SessionController();
