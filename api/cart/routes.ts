import express from "express";
import { cartController } from "./controller";

import { authenticateToken } from "../../middlewares/authMiddleware";
import { authorizeRoles } from "../../middlewares/roleMiddleware";

const { addCart, getCarts } = cartController;
const cartRouter = express.Router();

cartRouter.use( authenticateToken )

cartRouter.get("/getCarts", getCarts);
cartRouter.post("/addCart", authenticateToken, authorizeRoles("admin", "vendedor"), addCart);

export default cartRouter;