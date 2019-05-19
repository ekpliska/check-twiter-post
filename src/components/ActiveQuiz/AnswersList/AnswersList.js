import React from 'react';
import AnswersListStyle from './AnswersList.module.css';
import AnswerItem from './AnswerItem';

/*
 * Компонент получает список возможных варантов ответов 
 * и выводит их к вопросу
 */
const AnswersList = (props) => {

    return (
        <ul className={AnswersListStyle.answersList}>
            {props.answers.map((answer, index) => {
                return (
                    <AnswerItem 
                        key={index}
                        answer={answer}
                        onAnswerClick={props.onAnswerClick}
                        state={props.state ? props.state[answer.id] : null}
                    />
                )
            } )}
        </ul>
    )
}

export default AnswersList;