import React, { useState, useEffect } from 'react';
import '../css/RacePage.css';

function RacePage({ onNavigate }) {
  const [raceStarted, setRaceStarted] = useState(false);
  const [winners, setWinners] = useState([]);
  const [racers, setRacers] = useState([
    {
      id: 1,
      name: 'PENGUIN',
      image: 'https://pngimg.com/uploads/madagascar_penguins/madagascar_penguins_PNG27.png',
      position: 0,
      speed: 0,
      finished: false
    },
    {
      id: 2,
      name: 'DUCK',
      image: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cartoons-PNG/Little_Duck_PNG_Clip_Art_Image.png?m=1629830181',
      position: 0,
      speed: 0,
      finished: false
    },
    {
      id: 3,
      name: 'CHICKEN',
      image: 'https://www.freeiconspng.com/uploads/red-single-chicken-png-8.png',
      position: 0,
      speed: 0,
      finished: false
    }
  ]);

  useEffect(() => {
    let raceInterval;
    let speedChangeInterval;

    if (raceStarted && winners.length === 0) {
      // Race progress interval
      raceInterval = setInterval(() => {
        setRacers(currentRacers => {
          const updatedRacers = currentRacers.map(racer => {
            if (racer.finished) return racer;
            
            const newPosition = racer.position + racer.speed;
            const finishLine = window.innerWidth - 150; // Account for racer width
            
            if (newPosition >= finishLine && !racer.finished) {
              racer.finished = true;
              setWinners(prev => [...prev, racer.name]);
            }
            
            return {
              ...racer,
              position: Math.min(newPosition, finishLine)
            };
          });

          if (updatedRacers.every(racer => racer.finished)) {
            clearInterval(raceInterval);
            clearInterval(speedChangeInterval);
          }
          
          return updatedRacers;
        });
      }, 50);

      // Speed change interval
      speedChangeInterval = setInterval(() => {
        setRacers(currentRacers => 
          currentRacers.map(racer => ({
            ...racer,
            speed: racer.finished ? racer.speed : Math.random() * (3 - 1) + 1 // Random speed between 1 and 3
          }))
        );
      }, 3000); // Change speeds every 3 seconds
    }

    return () => {
      clearInterval(raceInterval);
      clearInterval(speedChangeInterval);
    };
  }, [raceStarted, winners.length]);

  const startRace = () => {
    setRacers(racers.map(racer => ({
      ...racer,
      speed: Math.random() * (3 - 1) + 1, // Initial random speed between 1 and 3
      position: 0,
      finished: false
    })));
    setRaceStarted(true);
    setWinners([]);
  };

  const getCurrentRankings = () => {
    return [...racers]
      .sort((a, b) => b.position - a.position)
      .map((racer, index) => ({
        name: racer.name,
        place: index + 1
      }));
  };

  return (
    <div className="race-page">
      <button className="back-button" onClick={() => onNavigate('home')}>
        ←
      </button>
      
      <div className="race-content">
        <h1>RACE TIME!</h1>
        
        <div className="race-track">
          {racers.map((racer) => (
            <div key={racer.id} className="race-lane">
              <img 
                src={racer.image} 
                alt={racer.name} 
                className="racer"
                style={{
                  transform: `translateX(${racer.position}%)`
                }}
              />
              <div className="lane-divider"></div>
            </div>
          ))}
        </div>

        <div className="rankings-board">
          {getCurrentRankings().map(({ name, place }) => (
            <div key={name} className="ranking-item">
              <span className="place">{place}</span>
              <span className="name">{name}</span>
              {place === 1 && <span className="trophy">🏆</span>}
            </div>
          ))}
        </div>

        {!raceStarted ? (
          <button className="start-race-btn" onClick={startRace}>
            Start Race!
          </button>
        ) : winners.length === racers.length ? (
          <div className="results">
            <h2>Race Results:</h2>
            {winners.map((winner, index) => (
              <p key={index}>
                {index + 1}. {winner} {index === 0 ? '🏆' : ''}
              </p>
            ))}
            <button className="race-again-btn" onClick={() => {
              setRaceStarted(false);
            }}>
              Race Again!
            </button>
          </div>
        ) : (
          <div className="racing-text">Racing...</div>
        )}
      </div>
    </div>
  );
}

export default RacePage;
