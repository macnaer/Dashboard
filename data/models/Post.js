const { Sequelize } = require("sequelize");
const Category = require("../models/Category");
const db = require("../config/database");

const Post = db.define("Posts", {
  Title: {
    type: Sequelize.STRING("MAX"),
    allowNull: false,
  },
  ShortDescription: {
    type: Sequelize.STRING("MAX"),
    allowNull: false,
  },
  Description: {
    type: Sequelize.STRING("MAX"),
    allowNull: false,
  },
  Image: {
    type: Sequelize.STRING("MAX"),
    allowNull: false,
  },
  CategoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
Post.belongsTo(Category, { foreignKey: "CategoryId" });

Post.sync()
  .then(() => console.log("Table Category created."))
  .catch((err) => console.log("Error: Table Category not created.", err));
module.exports = Post;
