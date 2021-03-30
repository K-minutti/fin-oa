import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const Overview = (props) => {
  const id = props.customerLoans.custid;
  const income = props.customerLoans.income;
  const debt = props.customerLoans.debt;
  return (
    <div>
      <Card />
      <Card />
      <h1>{id}</h1>
      <h1>{income}</h1>
      <h1>{debt}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    customerLoans: state.customerLoans,
  };
};
export default connect(mapStateToProps)(Overview);
