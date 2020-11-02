const axios = require('axios');

module.exports = function availableUrlMiddleware(req, res, next) {
  const { full_url } = req.body;

  axios.get(full_url).then((response) => {
    if (response.status >= 100 && response.status < 300) {
      return next();
    } if (response.status < 600) {
      return res.sendStatus(412);
    }
  });
};
