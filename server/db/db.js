const Sequelize = require("sequelize");
const secret = require("../../secrets");
const conn = secret.dbconnection;
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://${conn}@localhost:5432/finastra`,
  {
    logging: false,
  }
);

module.exports = db;
