import Router from "express";
import {
  getAllUsers,
  getById,
  create,
  update,
  deleteRequest,
  login,
} from "../controllers/users.js";
import { authRequired } from "../utils/jwt.js";

const userRoutes = Router();

userRoutes.get("/", authRequired, getAllUsers);

userRoutes.get("/me", authRequired, getById);

userRoutes.post("/create", create);

userRoutes.put("/update", update);

userRoutes.delete("/delete", deleteRequest);

userRoutes.post("/auth", login);

export { userRoutes };
