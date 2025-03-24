import React from "react";
import "../css/TopBar.css";

const TopBar: React.FC = () => {
  return (
    <nav className="topbar">
      <div className="logo">
        <a href="#hero-section">Victor Hernandez</a>
      </div>
      <div className="nav-buttons1">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
      <h1 className="line">|</h1>
      <div className="nav-buttons2">
        <a href="#code-section" className="code">Coding</a>
        <a href="#music-section" className="music">Music</a>
      </div>
    </nav>
  );
};

export default TopBar;
