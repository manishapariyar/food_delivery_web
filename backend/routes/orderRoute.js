import express from "express";
import authMiddle from "../middleware/auth.js";
import { placeOrder } from "../controllers/orderController.js";
const orderRouter  = express.Router()

orderRouter.post("/place", authMiddle,placeOrder);

export default orderRouter;