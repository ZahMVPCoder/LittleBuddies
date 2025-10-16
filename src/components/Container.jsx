import React, { useState } from 'react';
import LoginForm from './LoginForm';
import CharacterSelect from './CharacterSelect';
import Home from './Home';

function Container() {
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedCharacter, setSelectedCharacter] = useState('penguin');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="app-container">
      {currentPage === 'login' && (
        <LoginForm onNavigate={handleNavigation} />
      )}
      {currentPage === 'character-select' && (
        <CharacterSelect
          onNavigate={handleNavigation}
          onCharacterSelect={handleCharacterSelect}
        />
      )}
      {currentPage === 'home' && (
        <Home
          character={selectedCharacter}
          onNavigate={handleNavigation}
        />
      )}
    </div>
  );
}

export default Container;
