import React from "react";

import TopBar from "./tabs/topbar";
import Music from "./tabs/Music";
import Hero from "./tabs/Hero";
import Code from "./tabs/Code";

import "./css/index.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <TopBar />
      <Hero />
      <Code />
      <Music />
    </div>
  );
};

export default App;
