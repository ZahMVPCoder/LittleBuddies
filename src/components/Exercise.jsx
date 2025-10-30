// Import React
import React from "react";

// Exercise screen
export default function Exercise({ onNavigate }) {
  return (
    <div className="container">
      {/* Title */}
      <h2 className="exercise-title">Exercise Page</h2>
      {/* Placeholder text */}
      <p>Here’s where your daily workouts will show up!</p>
      {/* Button to return to home */}
      <button className="btn blue" onClick={() => onNavigate("home")}>
        Back to Home
      </button>
    </div>
  );
}