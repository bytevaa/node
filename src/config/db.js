import mongoose from "mongoose";

export default async function connectDB(params) {
  try {
    await mongoose.connect("mongodb://localhost:27017/phoneStore");

    console.log("Успешное подключение к БД");
  } catch (err) {
    console.log("Ошибка при подключении к БД: " + err);
    process.exit(1)
  }
}
