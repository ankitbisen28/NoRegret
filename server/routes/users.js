import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/users/list", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
