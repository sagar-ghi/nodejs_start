import mongoose from "mongoose";

//parent=>Vechiles
//child =>cars,truck
export const categorySchema = new mongoose.Schema({
  parent: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 30,
  },
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 30,
  },
  isFeaturedOnMenu: {
    type: Boolean,
    default: false,
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
//products
