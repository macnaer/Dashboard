const { Sequelize } = require("sequelize");
const Category = require("../models/Category");
const db = require("../config/database");

const Post = db.define("Posts", {
  Title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ShortDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
// Post.belongsTo(Category, { foreignKey: "id" });

Post.sync()
  .then(() => console.log("Table Category created."))
  .catch((err) => console.log("Error: Table Category not created.", err));
module.exports = Post;
