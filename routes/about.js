const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('about');
});



/* Export router*/
module.exports = router;
