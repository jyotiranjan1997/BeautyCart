const express = require("express");
const {
  getNavbarProducts,
} = require("../controllers/navController");

const navbarRoutes = express.Router();

/* ADD */
// navbarRoutes.post("/", addNavbarItem);

/* GET ALL */
navbarRoutes.get("/", getNavbarProducts);

module.exports ={ navbarRoutes};
