const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { projects });
});

/* Export router*/
module.exports = router;
