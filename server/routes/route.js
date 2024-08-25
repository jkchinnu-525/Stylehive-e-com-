import express from "express";
import { signin, signup } from "../routehandlers/userHandler.js";
import {
  addProduct,
  getProducts,
  updateProducts,
} from "../routehandlers/productHandler.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/product", addProduct);
router.get("/product", getProducts);
router.put("/product/:id", updateProducts);
export default router;
