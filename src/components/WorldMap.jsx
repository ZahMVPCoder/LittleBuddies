import React, { useState } from 'react';
import '../css/WorldMap.css';

function WorldMap({ onNavigate }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characterData = {
    penguin: {
      name: 'PENGUIN',
      image: 'https://pngimg.com/uploads/madagascar_penguins/madagascar_penguins_PNG27.png',
    },
    duck: {
      name: 'DUCK',
      image: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cartoons-PNG/Little_Duck_PNG_Clip_Art_Image.png?m=1629830181',
    },
    chicken: {
      name: 'CHICKEN',
      image: 'https://www.freeiconspng.com/uploads/red-single-chicken-png-8.png',
    }
  };

  return (
    <div className="world-map">
      <button className="back-button" onClick={() => onNavigate('home')}>
        ←
      </button>

      <div className="character-selector">
        {Object.entries(characterData).map(([key, char]) => (
          <img
            key={key}
            src={char.image}
            alt={char.name}
            className="selectable-character"
            onClick={() => setSelectedCharacter(key)}
          />
        ))}
      </div>
      
      {selectedCharacter && (
        <div className="map-hud">
          <div className="character-portrait">
            <img 
              src={characterData[selectedCharacter].image} 
              alt={characterData[selectedCharacter].name} 
            />
            <span className="character-name">
              {characterData[selectedCharacter].name}
            </span>
          </div>
        </div>
      )}

      <div className="map-content">
        <h1>World Map</h1>
        {/* Add map interactions here */}
      </div>
    </div>
  );
}

export default WorldMap;
