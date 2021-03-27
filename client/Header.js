import React from "react";
const Header = () => {
  return (
    <nav className="row">
      <h1 style={{ fontSize: "30px", letterSpacing: "0.08em" }}>
        <span className="fas fa-circle-notch x-large"></span>Open Analytics
      </h1>
      <div className="navbar">
        <a className="nav-item">
          <span className="far fa-bell large"></span>
        </a>
        <a className="nav-item">
          <span className="far fa-user-circle large"></span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
