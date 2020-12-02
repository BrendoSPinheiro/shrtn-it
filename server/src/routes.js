const { Router } = require('express');

const UrlController = require('./app/controllers/UrlController');
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const authMiddleware = require('./app/middlewares/authMiddleware');

const router = Router();

router.get('/urls', authMiddleware, UrlController.index);
router.get('/urls/:id', authMiddleware, UrlController.show);
router.get('/:slug', UrlController.redirectUrl);

router.post('/urls', authMiddleware, UrlController.store);

router.delete('/urls/:id', authMiddleware, UrlController.delete);

router.post('/users', UserController.store);

router.post('/sessions', SessionController.authenticate);

module.exports = router;
