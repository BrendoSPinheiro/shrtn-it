const { Router } = require('express');

const UrlController = require('./app/controllers/UrlController');

const router = Router();

router.get('/:slug', UrlController.redirectUrl);
router.get('/urls', UrlController.index);
router.post('/urls', UrlController.store);

module.exports = router;
