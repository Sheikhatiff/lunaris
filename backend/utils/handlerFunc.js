import mongoose from "mongoose";

export const checkValidObjectId = (Model, _id) => {
  if (!_id || !mongoose.isValidObjectId(_id)) {
    throw new Error(`Correct ${Model.modelName} ID is required`);
  }
};
