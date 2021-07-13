import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(400).send("No token provided!");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.currentUser = decoded;
    next();
  } catch (ex) {
    return res.status(400).send("invalid token");
  }
};
