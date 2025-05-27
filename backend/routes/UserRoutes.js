import express from "express";
import {
  createUser,
  getUser,
  updateUser,
  getAllUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/:userID", getUser);
router.put("/:userID", updateUser);
router.get("/users", getAllUsers);

export default router;
