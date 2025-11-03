import React, { useEffect, useState } from 'react';
import '../css/WelcomePage.css';

function WelcomePage({ onNavigate }) {
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: 'PENGUIN',
      image: 'https://pngimg.com/uploads/madagascar_penguins/madagascar_penguins_PNG27.png',
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 150),
      speedX: 2,
      speedY: 1.5
    },
    {
      id: 2,
      name: 'DUCK',
      image: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cartoons-PNG/Little_Duck_PNG_Clip_Art_Image.png?m=1629830181',
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 150),
      speedX: 1.5,
      speedY: 2
    },
    {
      id: 3,
      name: 'CHICKEN',
      image: 'https://www.freeiconspng.com/uploads/red-single-chicken-png-8.png',
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 150),
      speedX: 2.5,
      speedY: 1.8
    }
  ]);

  // Define button safe zone
  const buttonZone = {
    top: window.innerHeight / 2 - 100, // 100px above button center
    bottom: window.innerHeight / 2 + 100, // 100px below button center
    left: window.innerWidth / 2 - 150, // 150px left of button center
    right: window.innerWidth / 2 + 150 // 150px right of button center
  };

  useEffect(() => {
    const animationFrame = setInterval(() => {
      setCharacters(chars => chars.map(char => {
        let newX = char.x + char.speedX;
        let newY = char.y + char.speedY;
        let newSpeedX = char.speedX;
        let newSpeedY = char.speedY;

        // Check horizontal boundaries
        if (newX <= 0 || newX >= window.innerWidth - 100) {
          newSpeedX = -char.speedX;
        }

        // Check vertical boundaries
        if (newY <= 0 || newY >= window.innerHeight - 150) {
          newSpeedY = -char.speedY;
        }

        // Check button zone collision
        if (newX > buttonZone.left && newX < buttonZone.right &&
            newY > buttonZone.top && newY < buttonZone.bottom) {
          // Determine which side to bounce off
          if (char.x <= buttonZone.left || char.x >= buttonZone.right) {
            newSpeedX = -char.speedX;
          }
          if (char.y <= buttonZone.top || char.y >= buttonZone.bottom) {
            newSpeedY = -char.speedY;
          }
          // Move character outside button zone
          if (char.x <= buttonZone.left) newX = buttonZone.left;
          if (char.x >= buttonZone.right) newX = buttonZone.right;
          if (char.y <= buttonZone.top) newY = buttonZone.top;
          if (char.y >= buttonZone.bottom) newY = buttonZone.bottom;
        }

        return {
          ...char,
          x: newX,
          y: newY,
          speedX: newSpeedX,
          speedY: newSpeedY
        };
      }));
    }, 1000/60);

    return () => clearInterval(animationFrame);
  }, []);

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">
          <span className="title-level">Level</span>
          <span className="title-up">Up</span>
          <span className="title-well">Well</span>
        </h1>
        <p className="welcome-subtitle">Level up your health with a little buddy!</p>
        <button 
          className="start-adventure-btn"
          onClick={() => onNavigate('login')}
        >
          Start Your Adventure! 🚀
        </button>
        <button 
          className="learn-more-btn"
          onClick={() => onNavigate('learn-more')}
        >
          Learn More
        </button>
      </div>

      <div className="characters-container">
        {characters.map(char => (
          <img
            key={char.id}
            src={char.image}
            alt={char.name}
            className="bouncing-character"
            style={{
              left: `${char.x}px`,
              top: `${char.y}px`,
              transform: `scaleX(${char.speedX > 0 ? 1 : -1})`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default WelcomePage;