import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;

// You can specify your database name here
const dbName = 'Dr-Ganesh'; // Change this to your actual database name if different

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env');
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      dbName, // Explicitly mention the dbName here
      // Add any mongoose options here if needed
    }).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}