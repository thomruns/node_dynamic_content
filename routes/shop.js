const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminObj = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminObj.products;
  res.render('shop', { 
    prods: products,
    pageTitle: 'Shop',
    path: '/' 
  });
});

module.exports = router;
