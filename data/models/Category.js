const { Sequelize } = require("sequelize");
const db = require("../config/database");

const Category = db.define("Category", {
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

Category.sync()
  .then(() => console.log("Table Category created."))
  .catch((err) => console.log("Error: Table Category not created.", err));
module.exports = Category;
