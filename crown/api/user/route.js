import { Router } from "express";
import crypto from "crypto";
import argon from "argon2";

import User from "./model.js";
import {
  loginSchema,
  userCreateSchema,
  userUpdateSchema,
  adminUserCreateSchema,
} from "./validation.js";
import { inputValidator } from "../../middleware/inputValidator.js";
import { onForgotPassword } from "../../mailer/forgotPassword.js";
import { isAdmin } from "../../middleware/isAdmin.js";
import { auth } from "../../middleware/auth.js";
import { validateObjectId } from "../../middleware/validateObjectId.js";

const router = Router();

router.post(
  "/admin/register",
  [inputValidator(adminUserCreateSchema), auth, isAdmin],
  async (req, res) => {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser)
      return res.status(400).send("User with this email already exist!");

    req.body.password = await argon.hash(req.body.password);

    const user = new User(req.body);
    await user.save();

    res.send(user);
  }
);

//user create
router.post(
  "/register",
  [inputValidator(userCreateSchema)],
  async (req, res) => {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser)
      return res.status(400).send("User with this email already exist!");

    req.body.password = await argon.hash(req.body.password);

    const user = new User(req.body);
    await user.save();

    res.send(user);
  }
);

router.post("/login", inputValidator(loginSchema), async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email/password");

  const isValidPassword = await argon.verify(user.password, req.body.password);
  if (!isValidPassword) return res.status(400).send("Invalid email/password");
  const token = user.generateAuthToken();
  res.send({ jwt: token });
});

router.get("/paginated", async (req, res) => {
  const { limit, page } = req.query;
  const users = await User.find()
    .skip((parseInt(page) - 1) * parseInt(page))
    .limit(parseInt(limit));
  res.send(users);
});

//put
router.put(
  "/update/:id",
  [inputValidator(userUpdateSchema), validateObjectId],
  async (req, res) => {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!user) return res.status(404).send("User with this Id doesn't exist");

    res.send(user);
  }
);

router.delete("/delete/:id", async (req, res) => {
  const result = await User.deleteOne({ _id: req.params.id });
  if (!result) return res.status(404).send("User with this Id doesn't exist");
  res.send(result);
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).send("User with this email doesn't exist");

  const token = crypto.randomBytes(32).toString("hex");
  await User.updateOne({ _id: user._id }, { $set: { resetToken: token } });

  const msg = await onForgotPassword(user, token);

  if (msg === "Failed") return res.status(400).send("Failed to send mail");
  res.send("Successfully sent mail");
});

router.post("/reset-password", async (req, res) => {
  const user = await User.findOne({ resetToken: req.body.token });
  if (!user) return res.status(400).send("Bad request");
  user.password = await argon.hash(req.body.password);
  await user.save();

  res.send("Success");
});

export default router;
