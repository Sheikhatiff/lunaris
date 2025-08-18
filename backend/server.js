import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
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
