const { Router } = require('express');

const UrlController = require('./app/controllers/UrlController');
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const authMiddleware = require('./app/middlewares/authMiddleware');
const availableUrlMiddleware = require('./app/middlewares/availableUrlMiddleware');

const router = Router();

router.get('/urls', authMiddleware, UrlController.index);
router.get('/:slug', UrlController.redirectUrl);

router.post('/urls', authMiddleware, availableUrlMiddleware, UrlController.store);
router.delete('/urls/:id', UrlController.delete);

router.post('/users', UserController.store);

router.post('/sessions', SessionController.authenticate);

module.exports = router;
