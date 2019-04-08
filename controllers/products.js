// hold form data from POST request
const products = [];

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
  products.push({ title: req.body.title }); // title is the name of the input field
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', { 
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productsCSS: true
  });
}