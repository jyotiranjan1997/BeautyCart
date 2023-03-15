const {Product} = require("../models/Product");

/* ADD to NAVBAR */
// const addNavbarItem = async (req, res) => {
//   const payload = req.body;

//   try {
//     const newNavbar = new Navbar(payload);
//     const savedNavbarProduct = await newNavbar.save();
//     res.status(200).json({
//       message: "Product successfully added.",
//       savedNavbarProduct,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

/* GET ALL THE PRODUCTS */
const getNavbarProducts = async (req, res) => {
  const { q } = req.query;
  try {
    const navbars = await Product.find({
      name: { $regex: ".*" + q, $options: "i" },
    });
    res.status(200).json(navbars);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getNavbarProducts };
