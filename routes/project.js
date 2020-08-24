const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;


/* GET specific project page. */
router.get('/:id', (req, res, next) => {
  const projectId = req.params.id;
  const project = projects.find(({id})=> id === +projectId);
  if (project){
    res.render('project', { project })
  } else {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
}); 

/* Export router*/
module.exports = router;
