const CreateUserService = require('../services/user/CreateUserService');

class UserController {
  async store(req, res) {
    try {
      const { name, email, password } = req.body;

      const createUser = new CreateUserService();

      const user = await createUser.execute({ name, email, password });

      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
