import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import cors from "cors";
import helmet from "helmet";

import connectDB from "./db/db.js";
import propertyRouter from "./routes/property.route.js";
import reviewRouter from "./routes/review.route.js";
// import testRouter from "./testing/testing.js";
import userRouter from "./routes/user.routes.js";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || "development";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (ENV === "development") {
  app.use(morgan("dev"));
}

// Implement cors
app.use(cors());

// Set Security HTTP Routes
app.use(helmet());

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

app.use("/api/v1/property", propertyRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/user", userRouter);
// app.use("/api/v1/testing", testRouter); // Placeholder for testing routes

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} at ${ENV} mode`);
  connectDB();
});

app.all(/.*/, (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.statusCode = 404;
  err.status = "fail";
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    message: err.message,
  });
});
