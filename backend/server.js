import dotenv from "dotenv";
import express from "express";
import mongoose, { mongo } from "mongoose";
import seedRouter from "./Routes/seedRoutes.js";
import productRouter from "./Routes/productRoutes.js";

dotenv.config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log("connected to local server db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
// ALL PRODUCTS API
app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
