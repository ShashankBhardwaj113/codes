import React from 'react';
import Questions from '../questionlist.json';
import LoginHeader from '../components/LoginHeader';

const QuestionDisplay = () => {
    return (
        <div>
            <LoginHeader num={1}/>
            {Questions.map((questions)=>{
                return (<div key={questions.id}>
                    <h2>
                        Q {questions.id}.{questions.question}
                    </h2>
                    <p>{questions.answer}</p>
                </div>);
            })}
        </div>
    );
}

export default QuestionDisplay;