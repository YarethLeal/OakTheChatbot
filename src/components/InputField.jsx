import React, { useState } from 'react';

const InputField = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim() !== '') {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe tu mensaje..."
      />
      <button className='chat-button' onClick={handleSend}>Enviar</button>
    </div>
  );
};

export default InputField;
