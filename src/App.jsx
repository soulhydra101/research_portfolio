// App.js
import React, { useState, useEffect } from "react";
import ResearchPortfolio from "./ResearchPortfolio";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  // Apply theme to <html> or <body>
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [theme]);
const translatePage = (lang) => {
  if (!window.googleTranslateLoaded) {
    alert("Google Translate not loaded yet. Please wait a second.");
    return;
  }

  const select = document.querySelector(".goog-te-combo");
  if (!select) {
    alert("Translate widget not found.");
    return;
  }

  if (lang === "english") select.value = "en";
  if (lang === "japanese") select.value = "ja";

  // Trigger Google Translate change
  select.dispatchEvent(new Event("change"));
};

  return (
    <div className="App">
      {/* Dark Mode Toggle */}
   

      {/* Portfolio */}
      <ResearchPortfolio />
    </div>
  );
}

export default App;
