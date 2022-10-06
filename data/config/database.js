const Sequelize = require("sequelize");
const Configuration = require("./settings");

module.exports = new Sequelize(
  Configuration.DATABASE_NAME,
  Configuration.DATABASE_USER,
  Configuration.DATABASE_PASS,
  {
    dialect: Configuration.DATABASE_DIALECT,
    host: Configuration.DATABASE_URL,
    port: Configuration.DATABASE_PORT,
    dialectOptions: {
      options: {
        trustServerCertificate: true,
      },
    },
  }
);
