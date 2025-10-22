import React, { useState, useEffect, useRef } from 'react';
import { sendMessageWithOpenAI } from '../services/chatservices';
import '../css/ChatBox.css';

const ChatBox = ({ character, characterData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      sender: 'user',
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const aiResponse = await sendMessageWithOpenAI([...messages, userMessage], character);
      setMessages(prev => [...prev, {
        sender: 'ai',
        text: aiResponse.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (error) {
      console.error('AI response error:', error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={`chat-box ${isOpen ? 'open' : ''}`}>
      <div className="chat-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="chat-header-info">
          <img src={characterData.image} alt={characterData.name} className="chat-avatar" />
          <span>{characterData.name}</span>
        </div>
        <button className="minimize-btn">{isOpen ? '−' : '+'}</button>
      </div>

      {isOpen && (
        <>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}-message`}>
                <div className="message-content">{msg.text}</div>
                <div className="message-timestamp">{msg.timestamp}</div>
              </div>
            ))}
            {isTyping && (
              <div className="message ai-message">
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="chat-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit">Send</button>
          </form>
        </>
      )}
    </div>
  );
};

export default ChatBox;