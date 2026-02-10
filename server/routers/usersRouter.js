import { Router } from "express";
import { User } from "../models/users.js";
import { Review } from "../models/reviews.js";
import { Recipe } from "../models/recipes.js";
import bcrypt from "bcrypt";
import { sequelize } from "../datasource.js";

export const usersRouter = Router();
const saltRounds = 16

/**
 * Create a new user account with the given name, email, and password by adding 
 * a new row entity to the User table in the database. Return a message stating
 * a successful or unsuccessful operation.
 */
usersRouter.post("/register", async (req, res) => {
  const userExist = await User.findOne({
    where: { email: req.body.userData.email },
  });
  if (userExist) {
    return res.status(422).json({ error: "User already exists" });
  }
  
  const salt = bcrypt.genSaltSync(saltRounds)
  const password_hash = bcrypt.hashSync(req.body.userData.password, salt)
  try {
    const fullName = req.body.userData.firstName + " " + req.body.userData.lastName;
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

/**
 * Check if user of a matching email and password exist in the database. Return 
 * the id, name, and email of the user if exist. This is used when user logs in.
 */
usersRouter.post("/signin", async (req, res) => {
  console.log("req.body is", req.body)
  const userExist = await User.findOne({
    where: { email: req.body.userData.email },
    attributes: ["uid", "full_name", "email", "password_hash"],
  });

  // not sign in; to return the user's id given their email
  if (userExist !== null && req.body.userData.password === null) {
    return res.json(userExist.uid)
  }

  if (userExist === null || !bcrypt.compareSync(req.body.userData.password, userExist.password_hash)) {
    return res.status(401).json({ error: "Incorrect username or password" });
  }

  return res.json({
    id: userExist.uid,
    name: userExist.full_name,
    email: userExist.email,
  });
});

/**
 * Return all of user's information, except for the password, if exist.
 */
usersRouter.get("/info", async (req, res) => {
  const uid = parseInt(req.query.value)
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

/**
 * Return all reviews of the user with the specified identifier.
 */
usersRouter.get("/reviews", async (req, res) => {
  const limit = parseInt(req.query.numRecipes);
  const offset = (limit * req.query.page) - limit;

  try {
    // separately call findAll and count, instead of using findAndCountAll,
    // due to usage of the include option (ex., SQL JOIN); 
    // otherwise, not accurate count
    const rows = await Review.findAll({
      include: [{
        model: Recipe,
        attributes: ["recipe_name", "img"],
      }],
      where: { author: req.query.value },
      limit: limit,
      offset: offset,
      distinct: true,
    });
    
    const count = await Review.count({
      where: { author: req.query.value },
    });

    return res.json({ 
      reviews: rows,
      count: count,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to fetch recipes." });
  }
});