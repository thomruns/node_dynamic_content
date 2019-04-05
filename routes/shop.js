const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminObj = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop'); // looks for pug template
});

module.exports = router;
