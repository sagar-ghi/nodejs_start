import jwt from "jsonwebtoken";

//401 =>Unauthorized
//403 =>Forbidden
export const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("No token provided!");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.currentUser = decoded;
    next();
  } catch (ex) {
    return res.status(400).send("invalid token");
  }
};
