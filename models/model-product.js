// Instead of saving the products to an array using this:
// const products = [];
// products are now stored in a file\
// use the node fs core module
const fs = require('fs');
// use the node path core module
const path = require('path'); // to create a path to the created file
// store the path to the data file to be accessed or modified
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );

  // get the product file (cb === callback function)
  // internal utility function
const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if(err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

// the Product class declaration
module.exports = class Product {
  constructor(title) {
    this.title = title; // title is the name of the input field
  }
  // method to store any product created by this class in the products array
  // with the callback function to execute
  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  // retrieve all products creatd by this class, hence static
  // this method is not limited to the instance of the class
  // but instead to every instance created by this class
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}