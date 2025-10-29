import React, { useState, useEffect } from "react";

// Import all your components
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import BeyondCoding from "./components/BeyondCoding";

// Removed: import ph100Banner from './assets/ph-100-banner.png'; // Banner import is no longer needed

import "./App.css"; // Your main app styles

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* This is the two-column grid */}
      <main className="main-content-grid">
        {/* Left Column */}
        <div className="left-column">
          <About />
          <TechStack />
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Removed: <div className="banner-container"> */}
          {/* Removed:   <img src={ph100Banner} alt="I am part of PH 100" /> */}
          {/* Removed: </div> */}
          <Experience /> {/* Experience is now directly in the right column */}
          <BeyondCoding />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
