import mongoose from "mongoose";

let isConnected = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "AgriTrucker",
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error); // Log the error with console.error
  }
};
