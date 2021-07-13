export const isAdmin = (req, res, next) => {
  if (req.currentUser.role !== "admin")
    return res
      .status(403)
      .send("Forbidden");
  next();
};
