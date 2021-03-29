const Sequelize = require("sequelize");
const db = require("./db");

const CustomerLoan = db.define("customerLoan", {
  custid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  income: Sequelize.INTEGER,
  creditScore: Sequelize.INTEGER,
  debt: Sequelize.FLOAT,
  date: Sequelize.STRING,
  loanTerm: Sequelize.INTEGER,
  interestRate: Sequelize.DOUBLE,
  creditIncidents: Sequelize.INTEGER,
  homeValue: Sequelize.INTEGER,
  loanAmount: Sequelize.INTEGER,
  productType: Sequelize.STRING,
  loanStatus: Sequelize.STRING,
});

module.exports = CustomerLoan;
