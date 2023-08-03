const Product = require("../models/product");

exports.getProducts = async (req, res, next) => {
  try {
    const productsList = [];
    const [[products]] = await Product.fetchAll();
    console.log(products);
    for (let i = 0; i < products.length; i++) {
      productsList.push(
        new Product(
          products[i]["product_id"],
          products[i]["title"],
          products[i]["price"],
          products[i]["description"],
          products[i]["image_url"]
        )
      );
    }
    res.status(200).json({
      products: productsList,
    });
  } catch (error) {
    res.status(400).json({
      message: "No Data",
    });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const product = new Product(
      null,
      req.body["title"],
      req.body["description"],
      req.body["price"],
      req.body["image_url"]
    );
    await product.save();
    console.log(result);
    res.status(201).json({ message: "Data is Added" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Problem while adding data" });
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const [[product]] = await Product.findById(id);

    console.log(product);

    if (product == undefined)
      return res.status(200).json({ message: "No Product found with this id" });
    res
      .status(200)
      .json({ message: "Data got Successfully", product: product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Problem while adding data" });
  }
};
