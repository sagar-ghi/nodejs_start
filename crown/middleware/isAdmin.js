export const isAdmin = (req, res, next) => {
  if (req.currentUser.role !== "admin")
    return res
      .status(401)
      .send("You are not authorized to access this resource");
  next();
};
