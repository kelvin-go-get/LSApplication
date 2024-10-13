const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

// Create customer
router.post("/createCustomer", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all customers
router.get("/getCustomers", async (req, res) => {
  console.log("Fetching customers...");
  const customers = await Customer.findAll();
  res.json(customers);
});
module.exports = router;
