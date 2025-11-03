import React, { useState } from 'react';
import LoginForm from './LoginForm';
import CharacterSelect from './CharacterSelect';
import Home from './Home';
import Achievement from './Achievement';
import WelcomePage from './WelcomePage';
import RacePage from './RacePage';
import LearnMorePage from './LearnMorePage';
import WorldMap from './WorldMap';

function Container() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [selectedCharacter, setSelectedCharacter] = useState('penguin');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="app-container">
      {currentPage === 'welcome' && <WelcomePage onNavigate={handleNavigation} />}
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
      {currentPage === 'achievements' && (
        <Achievement onNavigate={handleNavigation} />
      )}
      {currentPage === 'race' && (
        <RacePage onNavigate={handleNavigation} />
      )}
      {currentPage === 'learn-more' && (
        <LearnMorePage onNavigate={handleNavigation} />
      )}
      {currentPage === 'world-map' && (
        <WorldMap onNavigate={handleNavigation} character={selectedCharacter} />
      )}
    </div>
  );
}

export default Container;