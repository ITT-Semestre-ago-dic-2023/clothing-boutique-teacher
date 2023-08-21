import "dotenv/config.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import { PORT, SECRET_KEY } from "./common";

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: SECRET_KEY, resave: true, saveUninitialized: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: `Welcome to Clothing Boutique\n
    Developed by: Israel Santiago`,
  });
});

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
