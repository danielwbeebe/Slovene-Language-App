import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class QuizOne extends Component {
  constructor(){
    super();
      this.state = {
        number: 1,
        question: "What does 'jaz' mean?",
        left: "You",
        center: "I",
        right: "They",
        correct: "center",
        done: false,
      }
    this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
  }

  handleChangeQuestion() {
    this.randomOrder();
  };

  randomOrder() {
    var randNum = Math.floor(Math.random() * 3);
    console.log(`Random number selected: ` + randNum)

    if ((this.state.number===1) && (randNum===0)) {
      this.setState({
        number: 2,
        question: "What does 'on' mean?",
        left: "He",
        center: "I",
        right: "You",
        correct: "left"
      })}
    if ((this.state.number===1) && (randNum===1)){
      this.setState({
        number: 2,
        question: "What does 'on' mean?",
        left: "I",
        center: "He",
        right: "You",
        correct: "center"
      })}
    if ((this.state.number===1) && (randNum===2)) {
      this.setState({
        number: 2,
        question: "What does 'on' mean?",
        left: "You",
        center: "I",
        right: "He",
        correct: "right"
    })}
  }

  rightOrWrong() {

  }

  render(){
    return (
      <div className="quiz-one">
        <div className="quiz-one-header">
          <h1 className="quiz-one-message"><Link to="/main">slovolingo</Link></h1>
        </div>

        <div className="quiz-one-main">
          <h2>Quiz One: Pronouns</h2>
          <div className="quiz-one-question">
            <h3>{this.state.question}</h3>
          </div>

          <div className="quiz-one-choices">
            <button onClick={this.handleChangeQuestion} className="quiz-one-answer-left"><h4>{this.state.left}</h4></button>
            <button onClick={this.handleChangeQuestion} className="quiz-one-answer-center"><h4>{this.state.center}</h4></button>
            <button onClick={this.handleChangeQuestion} className="quiz-one-answer-right"><h4>{this.state.right}</h4></button>
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
