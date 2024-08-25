import ProductSchema from "../db/productSchema.js";

export const addProduct = async (req, res, next) => {
  const { id, name, price, quantity, description, image, gender, category } =
    req.body;
  try {
    const newProduct = new ProductSchema({
      id,
      name,
      price,
      quantity,
      description,
      gender,
      category,
      image,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await ProductSchema.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const updateProducts = async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedProduct = await ProductSchema.findOneAndUpdate(
      { id: id }, //Explicitly added custom 'id' instead of '_id'
      updateData,
      {
        new: true,
      }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (err) {
    next(err);
  }
};
