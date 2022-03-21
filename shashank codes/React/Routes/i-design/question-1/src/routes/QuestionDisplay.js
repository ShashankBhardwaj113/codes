import React from 'react';
import Questions from '../questionlist.json';

const QuestionDisplay = () => {
    return (
        <div>
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