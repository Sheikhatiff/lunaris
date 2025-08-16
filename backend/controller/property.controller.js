import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import Property from "../model/property.model.js";
import { deleteImagePromise } from "../utils/imageHandler.js";
import { checkValidObjectId } from "../utils/handlerFunc.js";

export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find().select(
      "-reviews -features -amenities -details -description -__v"
    );
    res.status(200).json({
      status: "success",
      results: properties.length,
      data: {
        properties,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params._id).populate(
      "reviews"
    );
    if (!property) {
      return res.status(404).json({
        status: "fail",
        message: "Property not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        property,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const createProperty = async (req, res) => {
  try {
    const newProperty = await Property.create({
      imageCover: req.files.imageCover?.[0]?.filename || null,
      images: req.files.images?.map((file) => file.filename) || [],
      ...req.body,
    });
    res.status(201).json({
      status: "success",
      data: {
        property: newProperty,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params._id);
    if (!property) {
      return res.status(404).json({
        status: "fail",
        message: "Property not found",
      });
    }

    const photos = [property?.imageCover, ...(property?.images || [])];
    if (Array.isArray(photos) && photos.length > 0) {
      await Promise.all(
        photos.map((photo) =>
          deleteImagePromise(
            [__dirname, "..", "public", "images", "properties"],
            photo
          )
        )
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
      stack: error.stack,
    });
  }
};

export const updatePropertyImages = async (req, res) => {
  try {
    const { _id } = req.params;
    checkValidObjectId(Property, _id);

    const property = await Property.findById(_id);

    const photos = [property?.imageCover, ...(property?.images || [])];
    if (Array.isArray(photos) && photos.length > 0) {
      await Promise.all(
        photos.map((photo) =>
          deleteImagePromise(
            [__dirname, "..", "public", "images", "properties"],
            photo
          )
        )
      );
    }
    const newProperty = await Property.findByIdAndUpdate(
      _id,
      {
        imageCover: req.files.imageCover?.[0]?.filename || null,
        images: req.files.images?.map((file) => file.filename) || [],
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!newProperty) {
      return res.status(404).json({
        status: "fail",
        message: "Property not found",
      });
    }

    res.status(200).json({
      status: "Updated Images successfully",
      data: {
        newProperty,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const updateProperty = async (req, res) => {
  try {
    const { _id } = req.params;
    checkValidObjectId(Property, _id);

    const property = await Property.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!property) {
      return res.status(404).json({
        status: "fail",
        message: "No property found with this ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        property,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
