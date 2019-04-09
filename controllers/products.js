// require the product model module
const Product = require('../models/model-product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add a Product',
    path: '/admin/add-product',
    formsCSS: true,
    productsCSS: true,
    activeAddProduct: true
   });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title); // title is name of input field
  product.save(); // method of the Product class
  res.redirect('/');
};

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