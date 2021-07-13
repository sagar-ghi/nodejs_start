import express from "express";
import { auth } from "../../middleware/auth.js";
import { isAdmin } from "../../middleware/isAdmin.js";
import { validateObjectId } from "../../middleware/validateObjectId.js";
import Category from "./model.js";
const router = express.Router();

//CRUD
router.post("/create", [auth, isAdmin], async (req, res) => {
  const category = new Category(req.body);
  await category.save();

  res.send(category);
});

router.get("/get/:id", validateObjectId, async (req, res) => {
  const { id } = req.params;

  const category = await Category.findOne({ _id: id });
  if (!category)
    return res.status(404).send("Category with this id doesn't exist");

  res.send(category);
});

router.get("/menu", async (req, res) => {
  const categories = await Category.find({ isFeaturedOnMenu: true });
  res.send(categories);
});

router.get("/paginate", async (req, res) => {
  const { limit = 5, page = 1 } = req.query;
  const skip = (parseInt(page) - 1) * parseInt(limit);
  const categories = await Category.find().skip(skip).limit(parseInt(limit));

  res.send(categories);
});

//cursor pagination
/*
{
  docs:[],
  hasNextPage:bool,
  hasPrevPage:bool,
  limit:...,
  page:...,
  nextPage:..,
  prevPage:...,
  totalDocs:,
  totalPages:...,

  }

*/

router.patch(
  "/update/:id",
  [auth, isAdmin, validateObjectId],
  async (req, res) => {
    const updatedCategory = await Category.findOneAndUpdate(
      {
        _id: req.params.id,
        $set: req.body,
      },
      { new: true }
    );
    if (!updatedCategory)
      return res.status(404).send("Category with this id doesn't exist");

    res.send(updatedCategory);
  }
);

router.delete(
  "/delete/:id",
  [validateObjectId, auth, isAdmin],
  async (req, res) => {
    const result = await Category.deleteOne({ _id: req.params.id });
    // console.log(result);
    res.send(result);
  }
);
//pagination
// task;

export default router;
