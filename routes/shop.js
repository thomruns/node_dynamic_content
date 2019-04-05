const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminObj = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js', adminObj.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
