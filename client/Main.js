import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";

const Main = () => {
  return (
    <div id="main" className="row container">
      <Sidebar />
      <div className="main-container">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;
