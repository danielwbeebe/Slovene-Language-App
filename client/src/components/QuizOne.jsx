import React, {Component} from 'react';

class QuizOne extends Component {
  constructor(){
    super();
      this.state = {
        question: 1,
        answer: 1,
        wrong_one: 2,
        wrong_two: 3,
        done: false,
      }
  }

  handleChangeQuestion() {

  }

  handleRandomAnswerOrder() {

  }

  render(){
    return (
      <div className="quiz-one">

        <div className="quiz-one-header">

          <div className="quiz-one-message">
            <h1>slovolingo</h1>
          </div>

        </div>

        <div className="quiz-one-main">

          <div className="quiz-one-question">
            {this.state.question}
          </div>

          <div className="quiz-one-choices">
            <div className="quiz-one-answer-left">
              {this.state.answer}
            </div>
            <div className="quiz-one-answer-center">
              {this.state.wrong_one}
            </div>
            <div className="quiz-one-answer-right">
              {this.state.wrong_two}
            </div>
          </div>
        </div>

        <div className="quiz-one-footer">
          <h2>Created By Dan Beebe</h2>
        </div>

      </div>
    )
  }
}

export default QuizOne;
