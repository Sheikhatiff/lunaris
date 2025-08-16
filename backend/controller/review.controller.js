import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import Review from "../model/review.model.js";
import { deleteImagePromise } from "../utils/imageHandler.js";
import { checkValidObjectId } from "../utils/handlerFunc.js";

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({
      status: "success",
      results: reviews.length,
      data: {
        reviews,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getReviewById = async (req, res) => {
  try {
    const { _id } = req.params;
    checkValidObjectId(Review, _id);
    const review = await Review.findById(_id);
    if (!review) {
      return res.status(404).json({
        status: "fail",
        message: "Review not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        review,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const createReview = async (req, res) => {
  try {
    const newReview = await Review.create({
      rating: +req.body?.rating,
      photo: req.file?.filename || null,
      ...req.body,
    });
    await newReview.save();
    res.status(201).json({
      status: "success",
      data: {
        review: newReview,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
      stack: error.stack,
    });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const id = req.params._id;
    checkValidObjectId(Review, id);
    console.log(id);
    const review = await Review.findByIdAndDelete(id);
    if (!review) {
      return res.status(404).json({
        status: "fail",
        message: "Review not found",
      });
    }
    console.log(review.photo);
    const photo = review.photo;
    if (photo) {
      await deleteImagePromise(
        [__dirname, "..", "public", "images", "reviews", "users"],
        photo
      );
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const updateReview = async (req, res) => {
  try {
    const { _id } = req.params;

    checkValidObjectId(Review, _id);

    const review = await Review.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!review) {
      return res.status(404).json({
        status: "fail",
        message: "Review not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        review,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
