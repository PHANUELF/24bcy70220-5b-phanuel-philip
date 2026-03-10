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

// home route
app.get("/", (req, res) => {
  res.send("Student Management System Running");
});

// student routes
app.use("/students", studentRoutes);

// export app for Vercel
export default app;