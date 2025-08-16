import express from "express";
import {
  createProperty,
  deleteProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  updatePropertyImages,
} from "../controller/property.controller.js";
import { uploadPropertyImages } from "../utils/imageHandler.js";

const propertyRouter = express.Router();

propertyRouter.get("/", getAllProperties);
propertyRouter.get("/:_id", getPropertyById);
propertyRouter.post("/", uploadPropertyImages, createProperty);
propertyRouter.delete("/:_id", deleteProperty);
propertyRouter.patch(
  "/update-images/:_id",
  uploadPropertyImages,
  updatePropertyImages
);
propertyRouter.patch("/:_id", updateProperty);

export default propertyRouter;
