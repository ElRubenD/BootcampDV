import express from "express";
import { userController } from "./controller";
import { authenticateToken } from "../../middlewares/authMiddleware";
import { authorizeRoles } from "../../middlewares/roleMiddleware";

const userRouter = express.Router();

const { getUser, getUsers, createUser, loginUser, deleteUser, editUser } = userController;

userRouter.get("/", authenticateToken, authorizeRoles("admin"), getUsers);
userRouter.get("/:id", authenticateToken, getUser);
userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/deleteUser/:id", authenticateToken, authorizeRoles("admin"), deleteUser);
userRouter.put("/editUser/:id", authenticateToken, authorizeRoles("admin", "vendedor"), editUser);

export default userRouter;