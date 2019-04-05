const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// create a new variable to hold data
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  // console.log(products);
  products.push({ title: req.body.title });
  // console.log(products);
  res.redirect('/');
});

// modify what is exported to include products array
exports.routes = router;
exports.products = products;
