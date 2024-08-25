import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from "./routes/route.js";
import path from "path";
dotenv.config();

const app = express();
app.use(express.json());

const corsOptions = {
  origin: ["https://stylehive.onrender.com"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "application/json"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
mongoose
  .connect(process.env.Mongo_Url)
  .then(() => console.log("Connected to MongoDB"));
app.use("/api", userRoute);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
app.listen(3000, () => console.log("Server running on port 3000"));

