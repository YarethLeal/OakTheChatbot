//import axios from 'axios';


export const getResponse = async (text) => {
    try {
        //const response = await axios.post('http://localhost:3000/api/chatbot', { text });
        //return response.data.respuesta;
        //await new Promise(resolve => setTimeout(resolve, 3000));
        const response = await fetch('http://localhost:3000/api/consulta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'message': text })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Error fetching the response:', error);
        return 'Lo siento, algo salió mal. Inténtalo de nuevo.';
    }
};
