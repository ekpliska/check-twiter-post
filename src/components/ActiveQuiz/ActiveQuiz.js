import React from 'react';
import ActiveQuizStyle from './ActiveQuiz.module.css';
import AnswerList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => {
    // debugger;
    return (
        <div className={ActiveQuizStyle.activeQuiz}>
            <p className={ActiveQuizStyle.question}>
                <span>
                    <strong>
                        {props.currentQuestion}
                    </strong>
                    &nbsp;
                    {props.question}
                </span>
                <small>
                    {`${props.currentQuestion}`} 
                    &nbsp;из&nbsp;
                    {`${props.quizLength}`}
                </small>
            </p>
            <AnswerList
                state={props.state}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )
}

export default ActiveQuiz;