const Yup = require('yup');

module.exports = async function verifyUserMiddleware(req, res, next) {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6),
  });

  if (!await schema.isValid(req.body)) {
    return res.status(400).json({ error: 'Validation fails' });
  }

  return next();
};
