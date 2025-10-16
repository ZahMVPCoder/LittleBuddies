import React from 'react';

// Function to play AI voice using Web Speech API
const playVoice = (character) => {
  const synth = window.speechSynthesis;
  let utterance;

  switch (character) {
    case 'penguin':
      utterance = new SpeechSynthesisUtterance('Yo yo yo! i am the chillest penguin you shall ever meet! holler at ya boy for some icey balls you call snow cones!');
      utterance.pitch = 0.8;
      utterance.rate = 1;
      break;
    case 'chicken':
      utterance = new SpeechSynthesisUtterance('Cluck! give me back my children you boiled egg!just kidding, let\'s get moving and make today special!');
      utterance.pitch = 2;
      utterance.rate = 1.2;
      break;
    case 'duck':
      utterance = new SpeechSynthesisUtterance('Quack quack! I am your friendly duck buddy!');
      utterance.pitch = 1.5;
      utterance.rate = 1;
      break;
    default:
      utterance = new SpeechSynthesisUtterance('Character not recognized.');
  }

  synth.speak(utterance);
};

function CharacterSelect({ onNavigate, onCharacterSelect }) {
  const handleCharacterChoice = (character) => {
    playVoice(character);
    onCharacterSelect(character);
    onNavigate('home');
  };

  return (
    <div className="character-select-container">
      <button className="back-button" onClick={() => onNavigate('login')}>←</button>

      <button className="feedback-button">FEEDBACK</button>

      <div className="character-icons">
        <img src="https://pngimg.com/uploads/madagascar_penguins/madagascar_penguins_PNG27.png" alt="Penguin" className="icon-small" onMouseEnter={() => playVoice('penguin')} />
        <img src="https://www.freeiconspng.com/uploads/red-single-chicken-png-8.png" alt="Chicken" className="icon-small" onMouseEnter={() => playVoice('chicken')} />
        <img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cartoons-PNG/Little_Duck_PNG_Clip_Art_Image.png?m=1629830181" alt="Duck" className="icon-small" onMouseEnter={() => playVoice('duck')} />
      </div>

      <h1 className="choose-title">Choose Your Buddy!</h1>

      <div className="character-buttons">
        <button className="character-button" onClick={() => handleCharacterChoice('chicken')}>
          <img src="https://www.freeiconspng.com/uploads/red-single-chicken-png-8.png" alt="Chicken" />
          <span>CHICKEN</span>
        </button>

        <button className="character-button" onClick={() => handleCharacterChoice('duck')}>
          <img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cartoons-PNG/Little_Duck_PNG_Clip_Art_Image.png?m=1629830181" alt="Duck" />
          <span>DUCK</span>
        </button>

        <button className="character-button" onClick={() => handleCharacterChoice('penguin')}>
          <img src="https://pngimg.com/uploads/madagascar_penguins/madagascar_penguins_PNG27.png" alt="Penguin" />
          <span>PENGUIN</span>
        </button>
      </div>

      <button className="chat-button" onClick={() => {
        playVoice('penguin');
        playVoice('chicken');
        playVoice('duck');
      }}>💬</button>
    </div>
  );
}

export default CharacterSelect;
