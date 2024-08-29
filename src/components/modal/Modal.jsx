import React from 'react'
import './Modal.css';


const Modal = ({score}) => {

return (
    <div className='modal'>
        
       <div>Skor : {score}</div> 
        <div  onClick={() => window.location="/"}  className='modal-btn'>Start again</div>
        </div>
)
}


export default Modal