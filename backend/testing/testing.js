import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testRouter = express.Router();

// Serve property upload page
testRouter.get("/property", (req, res) => {
  res.sendFile(path.join(__dirname, "propertyUploder.html"));
});

// Serve review upload page
testRouter.get("/review", (req, res) => {
  res.sendFile(path.join(__dirname, "reviewUploader.html"));
});

testRouter.get("/propertyUpdate", (req, res) => {
  res.sendFile(path.join(__dirname, "updateProperty.html"));
});

// Serve review upload page
testRouter.get("/propertyUpdateImage", (req, res) => {
  res.sendFile(path.join(__dirname, "updatePropertyImages.html"));
});

export default testRouter;
