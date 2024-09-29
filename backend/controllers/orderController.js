import orderModel from "../model/OrderModel.js";
import userModel from "../model/userModel.js"
// import { createSignature}  from "./esewaControllers.js";
const placeOrder =  async(req,res) =>{
   try{
    const newOrder = new orderModel({
      userId:req.body.userId,
      items:req.body.items,
      amount:req.body.amount,
      address:req.body.address
    })
     const order = await newOrder.save()
     const signature = this.createSignature(
      `total_amount=${order.amount},transaction_uuid=${order._id},product_code=EPAYTEST`
    );

     const formData = {
      amount: order.amount,
      failure_url: "http://localhost:5173",
      product_delivery_charge: 2*100,
      product_service_charge: "0",
      product_code: "EPAYTEST",
      signature: signature,
      signed_field_names: "total_amount,transaction_uuid,product_code",
      success_url: "http://localhost:8000/api/esewa/success",
      tax_amount: "0",
      total_amount: order.amount,
      transaction_uuid: order._id,
    };
    res.json({
      message: "Order Created Sucessfully",
      order,
      payment_method: "esewa",
      formData,
    });
    
   }
   catch(error){
    res.status(400).json({message:error.message})
    await userModel.findByIdAndUpdate(req.body.userId,{cart:{}});

   }
   
 

  
   
};




export{
  placeOrder,

}