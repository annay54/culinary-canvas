import { Router } from "express";
import { User } from "../models/users.js";
import bcrypt from "bcrypt";
import { sequelize } from "../datasource.js";

export const usersRouter = Router();
const saltRounds = 16

usersRouter.post("/register", async (req, res) => {
  const userExist = await User.findOne({
    where: { email: req.body.userData.email },
  });
  if (userExist !== null) {
    return res.status(422).json({ error: "User already exists" });
  }
  
  const salt = bcrypt.genSaltSync(saltRounds)
  const password_hash = bcrypt.hashSync(req.body.userData.password, salt)
  try {
    const fullName = req.body.userData.firstName + " " + req.body.userData.lastName;
    // console.log("fullname is ", fullName);
    // console.log("email is ", req.body.userData.email);
    // console.log("salt is ", salt);
    // console.log("password_hash is ", password_hash);
    const [result, metadata] = await sequelize.query(`INSERT INTO users (full_name, email, password_hash) VALUES ('${fullName}', '${req.body.userData.email}', '${password_hash}')`);

    if (metadata == 1) {
      console.log("Inserted to table users successfully");
      return res.json({ message: "Successfully created user" })
    } else {
      console.log("Insertion to table users failed");
      return res.status(422).json({ error: "User creation failed" });
    }
  } catch (error) {
    console.log("error in user creation: ", error);
    return res.status(422).json({ error: "User creation failed" });
  }
});

usersRouter.post("/signin", async (req, res) => {
  console.log("req.body is", req.body)
  const userExist = await User.findOne({
    where: { email: req.body.userData.email },
    attributes: ["uid", "full_name", "email", "password_hash"],
  });

  if (userExist === null || !bcrypt.compareSync(req.body.userData.password, userExist.password_hash)) {
    return res.status(401).json({ error: "Incorrect username or password" });
  }

  return res.json({
    id: userExist.uid,
    name: userExist.full_name,
    email: userExist.email,
  });
});
