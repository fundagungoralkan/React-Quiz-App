import React from 'react'
import Dropdown from '../../components/dropdown/Dropdown';
import './Introduce.css';


const Introduce = () => {
    const difficulty = ["easy", "medium", "hard"]


return(
    <div className='introduce'>
   <div className='introduce-container'>
   <img src="https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-812.jpg" alt=""/>
   <Dropdown/>
   <div className='introduce-btn'>Quiz'e Bașla</div>
   </div>
    </div>
);


};

export default Introduce;