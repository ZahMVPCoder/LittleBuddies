import React, { useState } from 'react';
import '../css/Achievement.css'; // Fixed import path

const Achievement = ({ onNavigate }) => {
  const [achievements] = useState([
    {
      id: 1,
      title: "THE START OF SOMETHING GREAT!",
      description: "UNLOCK BY: COMPLETING YOUR FIRST QUEST.",
      isUnlocked: true,
      icon: "🎯"
    },
    {
      id: 2,
      title: "SEEING THE BRIGHT FUTURE!",
      description: "UNLOCK BY: COMPLETING 3 QUEST WITHIN 72 HOURS",
      isUnlocked: false,
      icon: "🌟"
    },
    {
      id: 3,
      title: "MENTALLY STRONG!",
      description: "UNLOCK BY: COMPLETING 5 MENTAL QUEST",
      isUnlocked: false,
      icon: "🧠"
    },
    {
      id: 4,
      title: "PHYSICALLY STRONG!",
      description: "UNLOCK BY: COMPLETING 5 PHYSICAL QUEST",
      isUnlocked: false,
      icon: "💪"
    },
    {
      id: 5,
      title: "THE OLYMPIAN",
      description: "UNLOCK BY: COMPLETE ALL CHALLENGING QUEST.",
      isUnlocked: false,
      icon: "🏆"
    },
    {
      id: 6,
      title: "NOT LITTLE ANY MORE!",
      description: "UNLOCK BY: MAX OUT YOUR LITTLE BUDDY",
      isUnlocked: false,
      icon: "🎮"
    }
  ]);

  const unlockedCount = achievements.filter(a => a.isUnlocked).length;
  const totalCount = achievements.length;
  const completionPercentage = Math.round((unlockedCount / totalCount) * 100);

  return (
    <div className="achievement-page">
      <button className="back-button" onClick={() => onNavigate('character-select')}>
        ←
      </button>
      
      <div className="achievement-container">
        {/* Header */}
        <div className="achievement-header">
          <div className="header-title">
            <span className="trophy-icon">🏆</span>
            <h1>ACHIEVEMENTS</h1>
            <span className="trophy-icon">🏆</span>
          </div>
          <p className="header-subtitle">
            Complete quests to unlock amazing achievements!
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`achievement-card ${
                achievement.isUnlocked ? 'unlocked' : 'locked'
              }`}
            >
              {/* Unlock Status Badge */}
              <div className="status-badge">
                {achievement.isUnlocked ? (
                  <span className="check-icon">✓</span>
                ) : (
                  <span className="lock-icon">🔒</span>
                )}
              </div>

              {/* Icon */}
              <div className="achievement-icon">
                <span className={achievement.isUnlocked ? '' : 'grayscale'}>
                  {achievement.icon}
                </span>
              </div>

              {/* Title */}
              <div className="achievement-title">
                {achievement.title}
              </div>

              {/* Description */}
              <p className="achievement-description">
                {achievement.description}
              </p>

              {/* Locked Overlay */}
              {!achievement.isUnlocked && (
                <div className="locked-overlay">
                  <span className="lock-overlay-icon">🔒</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress Stats */}
        <div className="progress-stats">
          <div className="stats-container">
            <div className="stat-item">
              <p className="stat-value">{unlockedCount}</p>
              <p className="stat-label">UNLOCKED</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <p className="stat-value">{totalCount}</p>
              <p className="stat-label">TOTAL</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <p className="stat-value">{completionPercentage}%</p>
              <p className="stat-label">COMPLETE</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;