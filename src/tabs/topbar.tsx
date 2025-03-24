import React from "react";
import "../css/TopBar.css";

const TopBar: React.FC = () => {
  return (
    <nav className="topbar">
      <h1 className="logo">Victor Hernandez</h1>
      <div className="nav-buttons">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default TopBar;
