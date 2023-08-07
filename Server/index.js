const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { connectToMongoDb } = require("./src/db/database");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToMongoDb();

require("dotenv").config();
const expressSession = require("express-session");
const MongoStore = require("connect-mongo");

app.use(
  expressSession({
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_DB_CONNECTION_STRING,
      dbName: "socialDiet",
    }),
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,
  })
);

const loginApi = require("./src/controllers/session");
const signupApi = require("./src/controllers/users");

app.use("/api", loginApi);
app.use("/api", signupApi);

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(PORT, () => {
  console.log("app is running");
});
