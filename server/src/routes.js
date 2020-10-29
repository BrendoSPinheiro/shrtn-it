const { Router } = require('express');

const UrlController = require('./app/controllers/UrlController');
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

const router = Router();

router.get('/:slug', UrlController.redirectUrl);
router.get('/urls', UrlController.index);
router.post('/urls', UrlController.store);

router.post('/users', UserController.store);

router.post('/sessions', SessionController.authenticate);

module.exports = router;
