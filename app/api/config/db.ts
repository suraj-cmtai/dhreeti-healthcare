import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    return;
  }
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }
  try {
    await mongoose.connect(mongoUri, {
      dbName: "Dr-Ganesh", // You can change this to your actual db name if needed
      connectTimeoutMS: 30000,
      serverSelectionTimeoutMS: 30000,
    });
    isConnected = true;
    console.log(`MongoDB connected successfully`);
  } catch (err: any) {
    console.error(`MongoDB connection error: ${err.message}`);
    throw err;
  }
}