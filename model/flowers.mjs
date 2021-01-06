import Mongoose from "mongoose";

export const flowers = new Mongoose.model("flowers", {
  Name: {
    type: String,
    required: true,
  },
  Quantity: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now(),
  },
  amount: {
    type: String,
  },
});
