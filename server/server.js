import express from "express";
import connect from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = `mongodb+srv://${username}:${password}@flipkartclone.sxa3y.mongodb.net/ajay?retryWrites=true&w=majority`;

connect(process.env.MONGODB_URI || URL);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(port, (req, res) => {
  console.log("Sunn Raha Hu");
});

// Default data to database

DefaultData();
