import userModel from "../model/userModel.js";

// add items to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    // console.log(userData);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    let cartData = await userData.cart;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res
      .status(200)
      .json({ success: true, message: "Item added to cart successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// remove items from user cart

const removeFromCart = async (req, res) => {};

// fetch user cart data
const fetchCartData = async (req, res) => {};

export { addToCart, removeFromCart, fetchCartData };
