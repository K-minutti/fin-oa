import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <section>
        <Link to="/overview">
          <h3 className="sidebar-item">Overview</h3>
        </Link>
        <Link to="/overview">
          <h3 className="sidebar-item">Bias Detection</h3>
        </Link>
        <Link to="/overview">
          <h3 className="sidebar-item">Officer 360</h3>
        </Link>
        <Link to="/overview">
          <h3 className="sidebar-item">Data</h3>
        </Link>
        <Link to="/overview">
          <h3 className="sidebar-item">Settings</h3>
        </Link>
      </section>
    </div>
  );
};

export default Sidebar;
