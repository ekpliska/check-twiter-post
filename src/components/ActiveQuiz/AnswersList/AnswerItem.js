import React from 'react';
import AnswersListStyle from './AnswersList.module.css';

const AnswerItem = (props) => {

    const cls = [AnswersListStyle.answerItem]

    if (props.state) {
        cls.push(AnswersListStyle[props.state])
    }

    return (
        <li className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswerItem;