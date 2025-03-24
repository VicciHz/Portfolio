import React from "react";
import TopBar from "./tabs/topbar"; // Ensure correct path

const App: React.FC = () => {
  return (
    <div className="hero-section">
      <TopBar />
      <div className="hero-content">
        <h1>Victor Hernandez</h1>
        <p>Developer | Musician | Producer</p>
      </div>
    </div>
  );
};

export default App;
