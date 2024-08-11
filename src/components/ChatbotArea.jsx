import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import InputField from './InputField';
import { getResponse } from '../services/api';

const ChatbotArea = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const handleSend = async (text) => {
        const userMessage = { text, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        setLoading(true);

        const botResponse = await getResponse(text);
        const botMessage = { text: botResponse, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);

        setLoading(false); // Set loading to false when the request is completed
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chatbot-area-container">
            <div className="messages-container">
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.text} sender={msg.sender} />
                ))}
                {loading && <div className="spinner">Loading...</div>}
                <div ref={messagesEndRef} />
            </div>
            <InputField onSend={handleSend} />
        </div>
    );
};

export default ChatbotArea;
