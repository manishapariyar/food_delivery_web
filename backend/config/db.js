import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://manishapariyar196:foodDel12345@cluster0.ezswzjp.mongodb.net/food_del"
    )
    .then(() => console.log("DB connected"));
};

