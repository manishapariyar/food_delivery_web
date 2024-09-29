import orderModel from "../model/OrderModel.js";
 






 const updateOrderAfterPayment = async (req, res, next) => {
  try {
    console.log(req.body);
    const order = await orderModel.findById(req.transaction_uuid);
    order.status = "paid";
    order.transaction_code = req.transaction_code;

    await orderModel.save(order);
    res.redirect("http://localhost:5173");
  } catch (err) {
    return res.status(400).json({ error: err?.message || "No Orders found" });
  }
};


 const createSignature = (message) => {
  const secret = "8gBm/:&EnhH.1/q"; //different in production
  // Create an HMAC-SHA256 hash
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(message);

  // Get the digest in base64 format
  const hashInBase64 = hmac.digest("base64");
  return hashInBase64;
};

export {
  updateOrderAfterPayment,
  createSignature
}
