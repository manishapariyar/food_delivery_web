import foodModel from "../model/foodModel.js";
import fs from "fs";

// add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    price: req.body.price,
    image: image_filename,
    description: req.body.description,
    category: req.body.category,
  });
  try {
    await food.save();
    res.status(201).json({ message: "Food added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addFood };
