const { MongoClient, MongoClient } = require("mongodb");
const MongoClient = new MongoClient(process.env.MONGO_DB_CONNECTION_STRING);

let userCollection;
let programCollection;
let dailyCollection;
let activityCollection;

const connectToMongoDb = () => {
  try {
    MongoClient.connect()
      .then((_) => {
        const db = MongoClient.db("socialDiet");
        userCollection = db.collection("user");
        programCollection = db.collection("program");
        dailyCollection = db.collection("dailyRecord");
        activityCollection = db.collection("activity");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log("Error Connecting to Mongo Database");
  }
};

const getUserCollection = () => userCollection;
const getProgramCollection = () => programCollection;
const getDailyCollection = () => dailyCollection;
const getActivityCollection = () => activityCollection;

module.exports = {
  connectToMongoDb,
  getUserCollection,
  getProgramCollection,
  getDailyCollection,
  getActivityCollection,
};
