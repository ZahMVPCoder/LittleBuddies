import React, { useState } from 'react';
import '../css/Home.css';
import ChatBox from './ChatBox';

function Home({ character = 'penguin', onNavigate }) {
  const characterData = {
    penguin: {
      name: 'PENGUIN',
      image: 'https://pngimg.com/uploads/madagascar_penguins/madagascar_penguins_PNG27.png',
      message: "I FEEL LIKE I'M GOING TO LEVEL UP IF YOU DO 5 JUMPING JACKS",
      stats: { spd: 3, str: 5, sta: 4 },
      background: 'penguin-bg'
    },
    duck: {
  name: 'DUCK',
  image: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cartoons-PNG/Little_Duck_PNG_Clip_Art_Image.png?m=1629830181',
  message: "I FEEL LIKE I'M GOING TO LEVEL UP IF YOU DO 5 JUMPING JACKS",
  stats: { spd: 4, str: 3, sta: 5 },
  background: 'duck-bg'
},
    chicken: {
  name: 'CHICKEN',
  image: 'https://www.freeiconspng.com/uploads/red-single-chicken-png-8.png',
  message: 'MAKE THIS DAY SPECIAL!',
  stats: { spd: 5, str: 4, sta: 3 },
  background: 'chicken-bg'
}
  };

  const currentCharacter = characterData[character];

  return (
    <div className={`home-container ${currentCharacter.background}`}>
      <button className="back-button" onClick={() => onNavigate('character-select')}>
        ←
      </button>

      <div className="character-label">
        <img src={currentCharacter.image} alt={currentCharacter.name} />
        <span>{currentCharacter.name}</span>
      </div>

      <div className="stats-panel">
        <h3>STATS</h3>
        <div className="stat-item"><span>SPD:</span><span>{currentCharacter.stats.spd}</span></div>
        <div className="stat-item"><span>STR:</span><span>{currentCharacter.stats.str}</span></div>
        <div className="stat-item"><span>STA:</span><span>{currentCharacter.stats.sta}</span></div>
      </div>

      <div className="character-display">
        <img src={currentCharacter.image} alt={currentCharacter.name} className="character-main" />
        <div className="speech-bubble">{currentCharacter.message}</div>
      </div>

      <div className="action-buttons">
        <button className="quest-btn" onClick={() => onNavigate('world-map')}>Quest!</button>
        <button className="race-btn" onClick={() => onNavigate('race')}>Race!</button>
        <button className="achievements-btn" onClick={() => onNavigate('achievements')}>Achievements</button>
      </div>

      <div className="inventory-icon">🎒</div>
      <div className="day-streak">DAY STREAK: 1</div>
      
      <ChatBox character={character} characterData={currentCharacter} />
    </div>
  );
}

export default Home;