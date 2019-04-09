const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title; // title is the name of the input field
  }
  // store any product created by this class in the products array
  save() {
    products.push(this);
  }
  // retrieve all products creatd by this class, hence static
  // this method is not limited to the instance of the class
  // but instead to every instance created by this class
  static fetchAll() {
    return products;
  }

}