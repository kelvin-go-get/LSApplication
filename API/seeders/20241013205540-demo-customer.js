"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Customers", [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        address: "123 Main St",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        address: "456 Elm St",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        address: "789 Maple Ave",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bob Brown",
        email: "bob.brown@example.com",
        address: "101 Oak St",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Charlie Davis",
        email: "charlie.davis@example.com",
        address: "202 Pine St",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Customers", null, {});
  },
};
