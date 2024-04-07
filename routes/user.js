import express from "express";
import {
  addUser,
  getUser,
  removeUser,
  updateUser,
  getUsers,
} from "../controllers/user.js";

const router = express.Router();
router.use(express.json());

// All routes in hear staring with /users
router.get("/", getUsers);

router.post("/", addUser);

router.get("/:id", getUser);

router.delete("/:id", removeUser);

router.patch("/:id", updateUser);

export default router;
