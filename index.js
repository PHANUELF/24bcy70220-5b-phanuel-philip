import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect database
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("Student Management System Running");
});

// routes
app.use("/students", studentRoutes);

export default app;