import express from "express";

import userRouter from "../api/user/routes";
import productRouter from "../api/product/routes";
import categoryRouter from "../api/category/routes";
import cartRouter from "../api/cart/routes";


const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/cart", cartRouter)

export default router;