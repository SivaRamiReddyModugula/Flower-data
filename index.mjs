import express from "express";
import Mongoose from "mongoose";
import cors from "cors";
import body_parser from "body-parser";
import route from "./routes/flower.mjs";

const app = express();

// Middel ware layer
app.use(body_parser.json());
app.use(cors());

// Database Connection user: sivaram, pass: Adn58c0ar7lco2OU
const connectURL =
  "mongodb+srv://sivaram:Adn58c0ar7lco2OU@flowers.baeot.mongodb.net/Flowers?retryWrites=true&w=majority";
Mongoose.connect(connectURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const con = Mongoose.connection;
con.on("open", async () => {
  await console.log("DataBase Connected Successful.");
});

// Routes
app.use("/flowers", route);
app.get("/", (req, res) => {
  res.send({ message: "Home" });
});
// Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
