// Instead of saving the products to an array using this:
// const products = [];
// products are now stored in a file
const fs = require('fs');
const path = require('path'); // to create a path to the created file

module.exports = class Product {
  constructor(title) {
    this.title = title; // title is the name of the input field
  }
  // store any product created by this class in the products array
  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if(!err) {
        products = JSON.parse(fileContent);
      }
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
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      if(err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
}