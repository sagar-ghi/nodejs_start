import { Router } from "express";
import Product from "./model.js";
const router = Router();

router.post("/create", async (req, res) => {
  const product = new Product(req.body);
// console.log(product)
//   return 
  await product.save();

  res.send(product);
});

//populate
router.get("/get/:id", async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id }).populate('category.id')
  console.log(product);
  res.send(product)
});

router.get("/get/paginate", async (req, res) => {});

router.put("/update/:id", async (req, res) => {});

router.delete("/delete/:id", async (req, res) => {});

export default router;


//normalized
// 
//advantage
//PACE SPACE 
//consistency

//disadvantage
//lookup =>not that effective


//de-normalized
//data embed

//advantage
//query performance

// disadvantage
//consistency hudaina

//mixed/hybrid
//data embed 
// =>name
//query performace
//space reduce
//

//data-buplication
//data SQl huna hudaina


// node
// product endpoint


//FE implemention  {payment }
// invoice path