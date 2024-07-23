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
// Listing all foods
const listFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.status(200).json({ success: true, data: food });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// remove food item

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.status(200).json({ success: true, message: "food removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addFood, listFood, removeFood };
