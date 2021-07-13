import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  number: Number,
  isBlocked: { type: Boolean, default: false },
  password: { type: String, required: true },
  resetToken: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    enum: ["admin", "moderator"],
  },
  location: String,
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      email: this.email,
      role: this.role,
      firstName: this.firstName,
      lastName: this.lastName,
      number: this.number,
    },
    process.env.JWT_SECRET_KEY
  );
  return token;
};

const User = mongoose.model("User", userSchema);

export default User;
