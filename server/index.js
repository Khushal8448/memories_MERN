import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// MongoDB Database Connection
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    CONNECTION_URL // {  useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => app.listen(PORT, () => console.log(`Server running on --Port: ${PORT}`)))
  .catch((error) => console.error(error.message));

// Routes
app.use("/posts", postRoutes);
