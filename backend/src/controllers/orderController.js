const {Order} = require("../models/Order");

/* Create order */
const createOrder = async (req, res) => {
  const payload = req.body;

  try {
    const savedOrder = await Order.create(payload);
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

/* GET USERS ORDER */
const getOrdersByUser = async (req, res) => {
  let { userId } = req.body;

  try {
    const orders = await Order.find({ userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
};

/* GET ALL Orders */
const getOrdersAdmin = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
};

/* DELETE Order */
const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createOrder, getOrdersByUser, getOrdersAdmin, deleteOrder };
