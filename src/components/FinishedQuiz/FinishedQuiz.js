import React from 'react';
import FinishedQuizStyle from './FinishedQuiz.module.css';

const FinishedQuiz = (props) => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++;
        }
        return total;
    }, 0);

    return (
        <div className={FinishedQuizStyle.finishedQuiz}>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {

                        const cls = [
                            'fa',
                            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                            FinishedQuizStyle[props.results[quizItem.id]]
                        ];

                        return (
                            <li key={index}>
                                <strong>{index + 1}</strong>. &nbsp;
                                {quizItem.question}
                                <i className={cls.join(' ')}></i>
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Правильно {successCount} из {props.quiz.length}
            </p>
            <div>
                <button onClick={props.onRetry}>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;