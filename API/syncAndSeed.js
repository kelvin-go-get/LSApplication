// syncAndSeed.js
const sequelize = require("./config/db");
const Customer = require("./models/customer");
const Project = require("./models/project");

(async () => {
  try {
    // Sync the database
    await sequelize.sync({ force: true }); // force: true will drop the table if it already exists
    console.log("Database & tables created!");

    // Insert dummy data
    const customer = await Customer.create({
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Main St",
    });

    const project = await Project.create({
      name: "Website Redesign",
      description: "Redesign the company website.",
      customerId: customer.id,
    });

    console.log("Dummy data added successfully!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();
