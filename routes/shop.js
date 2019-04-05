const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminObj = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminObj.products; // to use in pug template
  res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' }); // looks for pug template, data to pass
});

module.exports = router;
