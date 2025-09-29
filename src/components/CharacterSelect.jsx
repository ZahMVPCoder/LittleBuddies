// Import React
import React from "react";

// Character selection screen
export default function CharacterSelect({ onNavigate }) {
  return (
    <div className="container">
      {/* Title */}
      <h2 className="choose-title">Choose Your Buddy!</h2>

      {/* Character options */}
      <div className="character-options">
        {/* Button with chicken image */}
        <button className="char-btn" onClick={() => onNavigate("exercise")}>
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="chicken" />
          <span>CHICKEN</span>
        </button>

        {/* Button with duck image */}
        <button className="char-btn" onClick={() => onNavigate("exercise")}>
          <img src="https://cdn-icons-png.flaticon.com/512/1998/1998610.png" alt="duck" />
          <span>DUCK</span>
        </button>

        {/* Button with penguin image */}
        <button className="char-btn" onClick={() => onNavigate("exercise")}>
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="penguin" />
          <span>PENGUIN</span>
        </button>
      </div>
    </div>
  );
}
