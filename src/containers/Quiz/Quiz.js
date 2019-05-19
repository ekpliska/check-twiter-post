import React, { Component } from 'react';
import QuizStyle from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {

    state = {
        results: {}, // Результаты опроса
        isFinished: false, // Статус завершения опроса
        currentQuestion: 0, // Текущий вопрос
        answerState: null, // Храним информацию о текущем клике пользователя (либо правильный, либо неправильный ответ)
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                answers: [
                    { id: 1, text: 'Черный' },
                    { id: 2, text: 'Синий' },
                    { id: 3, text: 'Красный' },
                    { id: 4, text: 'Зеленый' },
                ],
                rightAnswerId: 2  
            },
            {
                id: 2,
                question: 'В каком году был основан Сакт-Петербург?',
                answers: [
                    { id: 1, text: '1700' },
                    { id: 2, text: '1702' },
                    { id: 3, text: '1703' },
                    { id: 4, text: '1803' },
                ],
                rightAnswerId: 3
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {

        // Если у нас получен правильный ответ, дальнейшее выполнение функции заканчиваем
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return;
            }
        }

        let question = this.state.quiz[this.state.currentQuestion];
        let results = this.state.results;

        if (question.rightAnswerId == answerId) {

            if (!results[question.id]) {
                results[question.id] = 'success';
            }

            // Если дали правильный ответ
            this.setState({
                answerState: { [answerId]: 'success' },
                results: results
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinish()) {
                    this.setState({
                        isFinished: true
                    });
                } else {
                    this.setState({
                        currentQuestion: this.state.currentQuestion + 1,
                        answerState: null
                    });
                } 
                window.clearTimeout(timeout);
            }, 1000)

        } else {
            // Если дали не правильный ответ
            results[question.id] = 'error';
            this.setState({
                answerState: { [answerId]: 'error' },
                results: results
            });
        }
    }

    isQuizFinish() {
        return this.state.currentQuestion + 1 === this.state.quiz.length;
    }

    onRetryHeandler = () => {
        this.setState({
            currentQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className={QuizStyle.quiz}>
                <div className={QuizStyle.quizWrapper}>
                    <h1>Дайте ответы на все вопросы</h1>

                    {
                        this.state.isFinished ?
                            <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.onRetryHeandler}
                            /> :

                            <ActiveQuiz
                                answers={this.state.quiz[this.state.currentQuestion].answers}
                                question={this.state.quiz[this.state.currentQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                currentQuestion={this.state.currentQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;