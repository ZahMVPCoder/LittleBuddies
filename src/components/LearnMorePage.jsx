import React from 'react';
import '../css/LearnMorePage.css';

function LearnMorePage({ onNavigate }) {
  return (
    <div className="learn-more-page">
      <button className="back-button" onClick={() => onNavigate('welcome')}>
        ←
      </button>
      
      <div className="info-container">
        <h1>Welcome to LevelUpWell</h1>
        
        <div className="info-content">
          <section className="info-section">
            <h2>🎮 Gamified Fitness Journey</h2>
            <p>Transform your fitness routine into an exciting adventure with our unique gamified approach. Choose your buddy companion and embark on a journey to better health!</p>
          </section>

          <section className="info-section">
            <h2>🤝 Your Personal Fitness Buddy</h2>
            <p>Select from our charming characters - Penguin, Duck, or Chicken - each with unique personalities to motivate and guide you through your fitness journey.</p>
          </section>

          <section className="info-section">
            <h2>🏆 Track Achievements</h2>
            <p>Earn achievements, compete in races, and watch your progress grow. Every workout brings you closer to unlocking new milestones and rewards!</p>
          </section>

          <section className="info-section">
            <h2>💪 Why Choose Us?</h2>
            <p>We combine fun, motivation, and effective exercise routines to help you stay committed to your fitness goals. Your buddy will be there every step of the way!</p>
          </section>
        </div>

        <button 
          className="start-now-btn"
          onClick={() => onNavigate('login')}
        >
          Start Your Journey Now! 🚀
        </button>
      </div>
    </div>
  );
}

export default LearnMorePage;
