import express from "express";
import {handleEsewaSuccess} from "../middleware/handleEsewa.js"
import { updateOrderAfterPayment } from "../controllers/esewaControllers.js";

const esewaRouter = express.Router();


esewaRouter.get("/success",handleEsewaSuccess, updateOrderAfterPayment)

export default esewaRouter