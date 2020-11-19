const axios = require('axios');

module.exports = function availableUrlMiddleware(req, res, next) {
  const { full_url } = req.body;

  axios({
    method: 'get',
    url: full_url,
  })
    .then(() => next())
    .catch(() => {
      res.status(400).json({ error: 'URL is not available' });
    });
};
