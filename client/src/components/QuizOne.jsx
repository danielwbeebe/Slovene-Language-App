import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
    if (this.state.number===2) {
    this.setState({
      number: 3,
      question: "What does 'ona' mean?",
      answer: "She",
      wrong_one: "They",
      wrong_two: "He",
    })}
    if (this.state.number===3) {
    this.setState({
      number: 4,
      question: "What does 'onadva' mean?",
      answer: "They both (masculine)",
      wrong_one: "They all",
      wrong_two: "They both (feminine)",
    })}
    if (this.state.number===4) {
    this.setState({
      number: 5,
      question: "What does 'onadve' mean?",
      answer: "They both (feminine)",
      wrong_one: "They all",
      wrong_two: "They both (masculine)",
    })}
    if (this.state.number===5) {
    this.setState({
      number: 6,
      question: "What does 'ti' mean?",
      answer: "you",
      wrong_one: "he",
      wrong_two: "I",
    })}
    if (this.state.number===6) {
    this.setState({
      number: 7,
      question: "What does 'Jaz sem' mean?",
      answer: "I am.",
      wrong_one: "He is.",
      wrong_two: "They are.",
    })}
    if (this.state.number===7) {
    this.setState({
      number: 8,
      question: "What does 'Ti si' mean?",
      answer: "You are.",
      wrong_one: "He is.",
      wrong_two: "I am.",
    })}
    if (this.state.number===8) {
    this.setState({
      number: 9,
      question: "What does 'On je' mean?",
      answer: "He is.",
      wrong_one: "She is.",
      wrong_two: "I am.",
    })}
    if (this.state.number===9) {
    this.setState({
      number: 10,
      question: "What does 'Mi smo' mean?",
      answer: "We are.",
      wrong_one: "They are.",
      wrong_two: "He is.",
    })}
    if (this.state.number===10) {
    this.setState({
      number: 11,
      question: "Congratulations! You finished quiz one!",
      answer: " ",
      wrong_one: " ",
      wrong_two: " ",
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
          <h1 className="quiz-one-message"><Link to="/main">slovolingo</Link></h1>
        </div>

        <div className="quiz-one-main">
          <h2>Quiz One: Pronouns</h2>
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
