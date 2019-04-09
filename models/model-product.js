// Instead of saving the products to an array using this:
// const products = [];
// products are now stored in a file
const fs = require('fs');
const path = require('path'); // to create a path to the created file
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if(err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title; // title is the name of the input field
  }
  // store any product created by this class in the products array
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