import mongoose from "mongoose";

export const validateObjectId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) return res.status(400).send("Invalid Id");
  next();
};
