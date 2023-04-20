import mongoose from "mongoose";
const { Schema } = mongoose;

import { connectionString } from "../credentials.js";

mongoose.connect(connectionString, {
  dbName: "Course-Projects",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("open", () => {
  console.log("Mongoose connected.");
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const carSchema = new Schema({
  manufacturer: { type: String, required: true },
  model: String,
  horsepower: Number,
  trimModel: String,
});

export const Car = mongoose.model("Car", carSchema);
