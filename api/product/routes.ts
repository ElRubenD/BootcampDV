import express from "express";
import { productController } from "./controller";
import { authenticateToken } from "../../middlewares/authMiddleware";
import { authorizeRoles } from "../../middlewares/roleMiddleware";

const productRouter = express.Router();

const { getProduct, getProducts, createProduct, deleteProduct, editProduct } = productController;

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/addProduct",authenticateToken, authorizeRoles("admin", "vendedor"), createProduct);
productRouter.delete("/deleteProduct/:id",authenticateToken, authorizeRoles("admin", "vendedor"), deleteProduct);
productRouter.put("/editProduct/:id",authenticateToken, authorizeRoles("admin", "vendedor"), editProduct);

export default productRouter;