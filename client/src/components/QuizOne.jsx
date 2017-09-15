import React, {Component} from 'react';

class QuizOne extends Component {
  constructor(){
    super();
      this.state = {
        number: 1,
        question: "What does 'jaz' mean?",
        answer: "I",
        wrong_one: "You",
        wrong_two: "They",
        done: false,
      }
    this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
    console.log(`question: ` + this.state.number + ` ` + this.state.question)
  }

  handleChangeQuestion() {
    if (this.state.number===1) {
    this.setState({
      number: 2,
      question: "What does 'on' mean?",
      answer: "He",
      wrong_one: "I",
      wrong_two: "You",
    })}
    this.randomOrder()
  };

  randomOrder() {
    var randNum = Math.floor(Math.random() * 3);
    console.log(`Random number selected: ` + randNum)
  }

  rightOrWrong() {

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
            <h3>{this.state.question}</h3>
          </div>

          <div className="quiz-one-choices">
            <button onClick={this.handleChangeQuestion} className="quiz-one-answer-left"><h4>{this.state.answer}</h4></button>
            <button onClick={this.handleChangeQuestion} className="quiz-one-answer-center"><h4>{this.state.wrong_one}</h4></button>
            <button onClick={this.handleChangeQuestion} className="quiz-one-answer-right"><h4>{this.state.wrong_two}</h4></button>
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
