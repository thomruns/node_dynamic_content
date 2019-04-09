const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();


// /admin/add-product => GET the controller
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

// now using a controller and model, a single router function is exported
module.exports = router;
