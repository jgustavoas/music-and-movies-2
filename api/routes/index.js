const express = require('express');
const { Create, Read, Update, Delete } = require('../controllers/Universal');

const router = express.Router();

/* home page */
router.get('/', (req, res, next) => {
  res.json({
    title: 'Music and Movies 2',
    text: 'Welcome to Music and Movies 2',
  });
});

/* models page */
router.post('/:MODEL', Create);
router.get('/:MODEL', Read);
router.patch('/:MODEL/:ID', Update);
router.delete('/:MODEL/:ID', Delete);

module.exports = router;
