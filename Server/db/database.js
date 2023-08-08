import mongoose from "mongoose";

const connectToMongoDb = async (databaseName) => {
  try {
    // process.env.DATABASE_URI,"mongodb+srv://MisaGarnie:Gyx0YhfPLgcaUo99@cluster0.chw5mzk.mongodb.net/?retryWrites=true&w=majority"
   //"mongodb+srv://Mkuma:sl3X5GakLiGV53cY@cluster0.chw5mzk.mongodb.net/?retryWrites=true&w=majority"
   //await mongoose.connect(process.env.DATABASE_URI,{
    await mongoose.connect("mongodb+srv://MisaGarnie:Gyx0YhfPLgcaUo99@cluster0.chw5mzk.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: databaseName
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error Connecting to Mongo Database:",err);
  }
};

export default connectToMongoDb;






