import mongoose from "mongoose"


const orderSchema = new mongoose.Schema({
  userId:{ type:String,required:true},
  items:{type:Array,required:true},
  amount:{type:Number,required:true},
  address:{
    street:String,
    state: String,
    city: String,
    ZipCode: String,
    country: String,
  
  },
  contact: {type:Number, required:true}

})

const orderModel = mongoose.model.order || mongoose.model("order", orderSchema);

export default orderModel;