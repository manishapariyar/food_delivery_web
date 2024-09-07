import mongoose from "mongoose"


const orderSchema = new mongoose.Schema({
  userId:{ type:String,required:true},
  items:{type:Array,required:true},
  amount:{type:Number,required:true},
  address:{type:Object,required:true},
  purchaseDate: { type: Date, default: Date.now },
  paymentMethod: { type: String, enum: ["esewa", "khalti"], required: true },
  status: { type: String, enum: ["pending", "completed", "refunded"], default: "pending" },

})

const orderModel = mongoose.model.order || mongoose.model("order", orderSchema);

export default orderModel;