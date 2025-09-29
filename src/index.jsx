import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../LittleBuddies/src/App";
import "./index.css";

// This finds the <div id="root"> in index.html and renders <App />
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
