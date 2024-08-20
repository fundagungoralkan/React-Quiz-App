import React, {useState} from 'react';
import Dropdown from '../../components/dropdown/Dropdown';
import './Introduce.css';
import {useNavigate} from 'react-router-dom';


const Introduce = () => {
    const difficulty = ["easy", "medium", "hard"]
    const [difficultyChange, setDifficultyChange] = useState('')
    const navigate = useNavigate()
    const TOTAL_QUESTIONS = 10


    const startQuiz = () => {
        if(difficultyChange){
         navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
        }
    }



return(
    <div className='introduce'>
   <div className='introduce-container'>
   <img src="https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-812.jpg" alt=""/>
   <Dropdown data={difficulty}  setDifficultyChange={setDifficultyChange}  />
   <div  onClick={startQuiz}   className='introduce-btn'>Quiz'e Bașla</div>
   </div>
    </div>
);


};

export default Introduce;