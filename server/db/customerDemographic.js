const Sequelize = require("sequelize");
const db = require("./db");

const CustomerDemographic = db.define("customerLoan", {
  custid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  job: Sequelize.STRING,
  age: Sequelize.INTEGER,
  lat: Sequelize.DECIMAL(9, 6),
  long: Sequelize.DECIMAL(8, 6),
  income: Sequelize.INTEGER,
  creditScore: Sequelize.INTEGER,
  householdSize: Sequelize.INTEGER,
  zipCode: Sequelize.INTEGER,
  majorCity: Sequelize.STRING,
  state: Sequelize.STRING,
  medianHomeValue: Sequelize.INTEGER,
  medianHouseholdIncome: Sequelize.INTEGER,
  debt: Sequelize.FLOAT,
});

module.exports = CustomerDemographic;
