import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <section>
        <div style={{ width: "85%", borderBottom: "1px solid #cecece" }}>
          <span
            className="fas fa-circle-notch large"
            style={{ color: "white", marginBottom: "36px" }}
          ></span>
        </div>
        <Link to="/overview">
          <h3 className="sidebar-item">
            <span className="fas fa-table"></span>Overview
          </h3>
        </Link>
        <Link to="/biasDetection">
          <h3 className="sidebar-item">
            <span className="fas fa-bullseye"></span>Bias Detection
          </h3>
        </Link>
        <Link to="/officer360">
          <h3 className="sidebar-item">
            <span className="fas fa-street-view"></span>Officer 360
          </h3>
        </Link>
        <Link to="/data">
          <h3 className="sidebar-item">
            <span className="fas fa-file-upload"></span>Data
          </h3>
        </Link>
        <Link to="/settings">
          <h3 className="sidebar-item">
            <span className="fas fa-sliders-h"></span>Settings
          </h3>
        </Link>
      </section>
    </div>
  );
};

export default Sidebar;
