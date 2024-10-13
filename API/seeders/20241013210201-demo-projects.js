"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Projects", [
      {
        name: "Project Alpha",
        description: "A project focused on frontend development.",
        customerId: 13, // John Doe
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Project Beta",
        description: "A project for backend API development.",
        customerId: 13, // John Doe
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Project Gamma",
        description: "A full-stack project with real-time features.",
        customerId: 14, // Jane Smith
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Project Delta",
        description: "A marketing project focused on social media.",
        customerId: 15, // Alice Johnson
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Project Epsilon",
        description: "An analysis project for data insights.",
        customerId: 16, // Bob Brown
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Project Zeta",
        description: "A project aimed at building an internal tool.",
        customerId: 17, // Charlie Davis
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Projects", null, {});
  },
};
