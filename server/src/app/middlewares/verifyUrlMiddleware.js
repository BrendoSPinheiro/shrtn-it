const Yup = require('yup');

module.exports = async function verifyUrlMiddleware(req, res, next) {
  const schema = Yup.object().shape({
    title: Yup.string(),
    full_url: Yup.string().url().required(),
  });

  if (!await schema.isValid(req.body)) {
    return res.status(400).json({ error: 'Validation fails' });
  }

  return next();
};
