import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import InputField from './InputField';
import { getQuestions, getResponse, getHelloMessage } from '../services/api';

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

    const getHelloAndQuestions = async () => {
        setLoading(true);

        try {
            // Primera petición: obtener mensaje de saludo
            const botResponse = await getHelloMessage();
            const botMessage = { text: botResponse, sender: 'bot' };
            setMessages((prevMessages) => [...prevMessages, botMessage]);

            // Segunda petición: obtener las preguntas
            const botQuestions = await getQuestions();
            const botInfo = { text: botQuestions, sender: 'bot' };
            setMessages((prevMessages) => [...prevMessages, botInfo]);

        } catch (error) {
            console.error('Error al obtener respuestas del bot:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        //Cuanto esta el strict mode activado en modo desarrollo este metodo se ejecuta 2 veces
        getHelloAndQuestions();
    }, []);

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
