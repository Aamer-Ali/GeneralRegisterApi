const db = require("../utils/database");

module.exports = class Product {
  constructor(id, title, description, price, imageUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  save() {
    return db.execute(
      "INSERT INTO products (title,price,description,image_url) values (?,?,?,?)",
      [this.title, this.price, this.description, this.imageUrl]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute("CALL get_all_products()");
    // return db.execute("SELECT * FROM products");
  }

  static findById(id) {
    return db.execute(`SELECT * FROM products WHERE product_id = ${id}`);
  }
};
