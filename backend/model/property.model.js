import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A Property must have a title"],
      unique: true,
      trim: true,
      minLength: [10, "Property title must contain minimum 10 alphabets"],
      maxLength: [50, "Property title must contain maximum 50 alphabets"],
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, "A House must have a description"],
    },
    details: {
      bedrooms: {
        type: Number,
        required: true,
        min: 1,
      },
      beds: {
        type: Number,
        required: true,
        min: 1,
      },
      bathrooms: {
        type: Number,
        required: true,
        min: 1,
      },
      maxGuests: {
        type: Number,
        required: true,
        min: 1,
      },
    },
    imageCover: {
      type: String,
      required: [true, "A House must have a image cover"],
    },
    images: [String],
    amenities: [String],
    features: [
      {
        name: String,
        description: String,
      },
    ],
    rating: {
      average: {
        type: Number,
        default: 4.5,
        min: [1.0, "Property ratings must be >= 1.0"],
        max: [5.0, "Property ratings must be <= 5.0"],
        set: (val) => Math.round(val * 10) / 10,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual for reviews
propertySchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "property",
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
