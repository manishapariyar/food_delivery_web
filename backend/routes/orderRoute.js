import express from "express";
// import authMiddle from "../middleware/auth.js";
import { orderFood } from "../controllers/orderController.js";
const orderRouter  = express.Router()

orderRouter.post("/place",orderFood);

export default orderRouter;