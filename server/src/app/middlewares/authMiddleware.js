const jwt = require('jsonwebtoken');

module.exports = function authMiddleware(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const { id } = jwt.verify(token, process.env.JWTSECRET);

    req.userId = id;

    return next();
  } catch (error) {
    return res.sendStatus(401);
  }
};
