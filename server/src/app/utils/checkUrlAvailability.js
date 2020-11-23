const axios = require('axios');

module.exports = async function availableUrlMiddleware(full_url) {
  await axios({
    method: 'get',
    url: full_url,
  })
    .then()
    .catch(() => {
      throw Error('URL is not available');
    });
};
