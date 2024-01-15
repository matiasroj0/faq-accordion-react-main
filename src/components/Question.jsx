import plusIcon from '../assets/images/icon-plus.svg'
import minusIcon from '../assets/images/icon-minus.svg'
import { useState } from 'react';
import '../Question.css'


function Question(props) {

    const [isShown, setIsShown] = useState(props.open)

    const handleClick = () =>{
        setIsShown(!isShown);
        console.log(isShown)
    };

    return (
        <>
            <div className="question-container">
                <div className="question-flex">
                    <h2 onClick={handleClick}>{props.question}</h2>
                    <img 
                        src={isShown ? minusIcon : plusIcon}
                        onClick={handleClick}
                    />
                </div>
                <p className="answer">{isShown ? props.answer : ''}</p>
            </div>
        </>
    );
}

export default Question