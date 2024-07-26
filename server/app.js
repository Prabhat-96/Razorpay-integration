import { config } from "dotenv";
import express from "express";
import paymentRoutes from "./routes/paymentRoutes.js";


config({path: "./config/config.env"})
export const app = express();


app.use("/api", paymentRoutes)

