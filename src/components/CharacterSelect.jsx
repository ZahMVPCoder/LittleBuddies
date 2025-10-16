import React from 'react';

function CharacterSelect({ onNavigate, onCharacterSelect }) {
  const handleCharacterChoice = (character) => {
    // Save the selected character
    onCharacterSelect(character);
    // Navigate to the home page with the selected character
    onNavigate('home');
  };

  return (
    <div className="character-select-container">
      <button className="back-button" onClick={() => onNavigate('login')}>
        ←
      </button>

      <button className="feedback-button">
        FEEDBACK
      </button>

      <div className="character-icons">
        <img src="/assets/penguin.png" alt="Penguin" className="icon-small" />
        <img src="/assets/chicken.png" alt="Chicken" className="icon-small" />
        <img src="/assets/duck.png" alt="Duck" className="icon-small" />
      </div>

      <h1 className="choose-title">Choose Your Buddy!</h1>

      <div className="character-buttons">
        <button
          className="character-button"
          onClick={() => handleCharacterChoice('chicken')}
        >
          <img src="/assets/chicken.png" alt="Chicken" />
          <span>CHICKEN</span>
        </button>

        <button
          className="character-button"
          onClick={() => handleCharacterChoice('duck')}
        >
          <img src="/assets/duck.png" alt="Duck" />
          <span>DUCK</span>
        </button>

        <button
          className="character-button"
          onClick={() => handleCharacterChoice('penguin')}
        >
          <img src="/assets/penguin.png" alt="Penguin" />
          <span>PENGUIN</span>
        </button>
      </div>

      <button className="chat-button">
        💬
      </button>
    </div>
  );
}

export default CharacterSelect;
