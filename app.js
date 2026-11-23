import express from "express";
import path from "path";
import productRouter from "./src/routes/ProductRoute.js";
import userRouter from "./src/routes/userRoute.js";

import connectDB from "./src/config/db.js";

const app = express();
app.use(express.json())
connectDB();

app.use("/api/product" , productRouter )
app.use("/api/user" , userRouter )


const PORT = 5000;

app.listen(PORT, () => {
  console.log("Сервер успешно запущен: " + PORT);
});
