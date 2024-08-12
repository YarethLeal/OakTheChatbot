
export const getHelloMessage = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/hello');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Error fetching the hello message:', error);
        return 'Lo siento, algo salió mal. Inténtalo de nuevo.';
    }
};

export const getResponse = async (text) => {
    try {
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

export const getQuestions = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/preguntas');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.questions;
    } catch (error) {
        console.error('Error fetching the questions:', error);
        return [];
    }
}