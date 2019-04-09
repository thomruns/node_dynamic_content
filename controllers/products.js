// require the product model module
const Product = require('../models/model-product');

// render the add-product view
exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add a Product',
    path: '/admin/add-product',
    formsCSS: true,
    productsCSS: true,
    activeAddProduct: true
   });
};

// initialize a new instance of the Product class from the product model
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title); // title is name of input field
  product.save(); // method of the Product class
  res.redirect('/');
};

// render the shop view
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop', { 
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productsCSS: true
    });
  }); 
  
};