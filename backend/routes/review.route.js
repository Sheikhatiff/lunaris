import express from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  updateReview,
} from "../controller/review.controller.js";
import { uploadReviewUserImage } from "../utils/imageHandler.js";

const reviewRouter = express.Router();

reviewRouter.post("/", uploadReviewUserImage, createReview);
reviewRouter.get("/", getAllReviews);
reviewRouter.get("/:_id", getReviewById);
reviewRouter.delete("/:_id", deleteReview);
reviewRouter.patch("/:_id", updateReview);
export default reviewRouter;
