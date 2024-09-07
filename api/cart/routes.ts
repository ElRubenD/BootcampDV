import express from "express";
import { cartController } from "./controller";

import { authenticateToken } from "../../middlewares/authMiddleware";

const { addCart, getCarts } = cartController;
const cartRouter = express.Router();

cartRouter.use( authenticateToken )

cartRouter.get("/getCarts", getCarts);
cartRouter.post("/addCart", addCart);

export default cartRouter;