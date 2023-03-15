require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { userRoutes } = require("./src/routes/users");
const { productRoute } = require("./src/routes/products");
const { cartRoutes } = require("./src/routes/carts");
const { orderRoute } = require("./src/routes/orders");
const { connect } = require("./src/config/db");
const { navbarRoutes } = require("./src/routes/navbar");

const app = express();
const PORT = process.env.PORT || 5000;

/* BASIC */
app.use(express.json());
app.use(cors());

/* WELCOME */
app.get("/", (req, res) => {
  res.send("WELCOME TO BEAUTYBEBO.COM BACKEND");
});

/* ROUTES */
app.use("/users", userRoutes);
app.use("/products", productRoute);
app.use("/carts", cartRoutes);
app.use("/orders", orderRoute);
app.use("/navbars", navbarRoutes);

/* LISTENING */
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on http://localhost:${PORT}`);
});
