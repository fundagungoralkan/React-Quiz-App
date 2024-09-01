



const shuffleArray = (array) => {
return [...array].sort(() => Math.random() -0.5)
}




export const fetchQuizData = async (difficulty, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        if (!data.results || data.results.length === 0) {
            throw new Error('No quiz data found');
        }

        return data.results.map((dt) => ({
            ...dt,
            answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer])
        }));
    } catch (error) {
        console.error('Failed to fetch quiz data:', error.message);
        return []; 
    }
}
