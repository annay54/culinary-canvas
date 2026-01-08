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

usersRouter.get("/info", async (req, res) => {
  const uid = parseInt(req.query.value)
  console.log("start")
  const userExist = await User.findOne({
    where: { uid: uid },
    attributes: ["uid", "full_name", "email", "profile_img", "social", "location", "about", "privacy", "custom_privacy", "show_email" ],
  });

  if (userExist === null) {
    console.log("User does not exist")
    return res.status(401).json({ error: "User does not exist" });
  }

  // transforming fetched social and custom_privacy database data from string to list
  const socialList = userExist.social.substring(1, userExist.social.length - 1).split(",")
  let customPrivacyList = []
  for (const elem of userExist.custom_privacy.substring(1, userExist.custom_privacy.length - 1).split(",")) {
    if (elem === "t") {
      customPrivacyList.push(true)
    }
    else {
      customPrivacyList.push(false)
    }
  }

  return res.status(200).json({
    uid: userExist.uid,
    full_name: userExist.full_name,
    email: userExist.email,
    profile_img: userExist.profile_img,
    social: {
      facebook: socialList[0],
      youtube: socialList[1],
      tiktok: socialList[2],
      instagram: socialList[3],
    },
    location: userExist.location,
    about: userExist.about,
    privacy: userExist.privacy,
    custom_privacy: {
      prof: customPrivacyList[0], 
      review: customPrivacyList[1], 
      fav: customPrivacyList[2],
    },
    show_email: userExist.show_email,
  });
});