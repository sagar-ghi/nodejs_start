//category
//name
//thumbnail
//images
//stocks
//discount
//description
//price

import mongoose from "mongoose";
import { categorySchema } from "../category/model.js";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  thumbnail: { type: String, required: true },
  //normalized
  // category: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "Category",
  // },

  //embedded docs
  // category: categorySchema,

  //hybrid
  category: {
    id: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    name: String,
  },
  images: [String],
  stocks: Number,
  discount: Number,
  description: { type: String, required: true },
  price: {
    currency: {
      type: String,
      required: true,
      enum: ["$", "RS"],
    },
    amount: {
      type: Number,
      required: true,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
//modeling relationship
// SQl
//table student       course
//   id 1 'Ram'    'CSI'
//ACID

// normalization

//MongoDB/nosql

//  normalization  =>using reference
// consistency

//de normalization  => document embed
//query performance

//third type
//hybrid approach
//
