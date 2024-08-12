import React, { useState, useEffect, useRef } from 'react';
import ChatbotArea from './ChatbotArea';
import pokeball from '../assets/pokeball.png';
import closepokeball from '../assets/closepokeball.png';

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
      <div className={`chatbot-window-container ${isOpen ? 'open' : 'closed'}`}>
        <ChatbotArea />
      </div>
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <div className={`icon-wrapper ${isOpen ? 'open' : 'closed'}`}>
          <img src={closepokeball} alt="close pokeball" width={40} height={40} className="close-icon" />
          <img src={pokeball} alt="pokeball" width={40} height={40} className="open-icon" />
        </div>
      </div>
    </>
  );
};

export default ChatbotWindow;