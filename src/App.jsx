import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import './App.css'; // Or './index.css' where your main styles are

function App() {
  // 1. Add state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. Create a function to toggle it
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // 3. Use useEffect to add/remove the .dark-mode class from the <body>
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]); // This effect runs every time isDarkMode changes

  return (
    <div className="App">
      {/* 4. Pass the state and function down to the Header */}
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Footer />
    </div>
  );
}

export default App;
