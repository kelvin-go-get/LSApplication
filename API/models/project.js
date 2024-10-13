const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Customer = require("./customer");

const Project = sequelize.define("Project", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: "id",
    },
  },
});

Project.belongsTo(Customer);
Customer.hasMany(Project, { foreignKey: "customerId" });

module.exports = Project;
