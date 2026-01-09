import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/ui.css";
import "./styles/Header.css";
import "./styles/Hero.css";
import "./styles/About.css";
import "./styles/Projects.css";
import "./styles/Skills.css";
import "./styles/Contact.css";
import "./styles/Footer.css";

window.addEventListener(
  "pointermove",
  (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty("--mx", `${x}%`);
    document.documentElement.style.setProperty("--my", `${y}%`);
  },
  { passive: true }
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
