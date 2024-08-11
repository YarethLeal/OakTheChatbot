import React, { useState, useEffect, useRef } from 'react';
import ChatbotArea from './ChatbotArea';

const ChatbotWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(true); // Abre automáticamente la ventana de chat al iniciar la página
  }, []);

  return (
    <>
      <div className={`chatbot-window-container ${isOpen ? 'open' : ''}`}>
        <ChatbotArea />
      </div>
      <div className="chatbot-icon" onClick={toggleChatbot}>
        {isOpen ? '❌' : '💬'}
      </div>
    </>
  );
};

export default ChatbotWindow;