import React , {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import * as api from '../../api/api'
import './Quiz.css'
import QuestionCard from '../../components/questionCard/QuestionCard'


const Quiz = () => {

const {difficulty, amount} =useParams()
const [questionsData, setQuestionsData] = useState([])
const [score, setScore] = useState(0)
const [count, setCount] = useState(0)
const [modal,setModal] = useState(false)


useEffect(() => {
    const getData = async () => {
        const data = await api.fetchQuizData(difficulty, amount);
        console.log(data); // API'den gelen verileri kontrol etmek için konsola yazdırın
        setQuestionsData(data);
    };
    getData();
}, [difficulty, amount]);



    return (
       <div className='quiz'>
        <QuestionCard
        questionsData={questionsData}
        score={score}
        setScore={setScore}
        count={count}
        modal={modal}
        setModal={setModal}
        
        />
       </div>
    )
}

export default Quiz