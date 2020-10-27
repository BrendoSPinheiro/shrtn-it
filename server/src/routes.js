const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({ OK: true });
});

module.exports = router;
