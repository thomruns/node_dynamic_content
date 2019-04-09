const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();
// if the / route is requested, fire the getProducts method of the products controller
router.get('/', productsController.getProducts );
// export the router with the get method initialized
module.exports = router;
