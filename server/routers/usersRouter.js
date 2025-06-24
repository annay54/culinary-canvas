import { Router } from "express";
import { User } from "../models/users.js";
// import bcrypt from "bcrypt";

export const usersRouter = Router();

usersRouter.post("/register", async (req, res) => {
  
});

usersRouter.get("/signin", async (req, res) => {
  // console.log("req.body is", req.body)
  const userExist = await User.findOne({
    where: { email: 'john@email.com' },
  });

  return res.json({ userExist })
});
