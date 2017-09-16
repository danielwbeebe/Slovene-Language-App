import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class QuizOne extends Component {
  constructor(){
    super();
      this.state = {
        number: 1,
        question: "What does 'jaz sem' mean?",
        left: "You are",
        center: "I am",
        right: "We are",
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

// question 2
    if ((this.state.number===1) && (randNum===0)) {
      this.setState({
        number: 2,
        question: "What does 'oni so' mean?",
        left: "They are",
        center: "I am",
        right: "He is",
        correct: "left"
      })}
    if ((this.state.number===1) && (randNum===1)){
      this.setState({
        number: 2,
        question: "What does 'oni so' mean?",
        left: "He is",
        center: "They are",
        right: "I am",
        correct: "center"
      })}
    if ((this.state.number===1) && (randNum===2)) {
      this.setState({
        number: 2,
        question: "What does 'oni so' mean?",
        left: "I am",
        center: "He is",
        right: "They are",
        correct: "right"
    })}

// question 3
    if ((this.state.number===2) && (randNum===0)) {
      this.setState({
        number: 3,
        question: "What does 'vidva sta' mean?",
        left: "You two are",
        center: "You are",
        right: "She is",
        correct: "left"
      })}
    if ((this.state.number===2) && (randNum===1)){
      this.setState({
        number: 3,
        question: "What does 'vidva sta' mean?",
        left: "She is",
        center: "You two are",
        right: "You are",
        correct: "center"
      })}
    if ((this.state.number===2) && (randNum===2)) {
      this.setState({
        number: 3,
        question: "What does 'vidva sta' mean?",
        left: "You are",
        center: "She is",
        right: "You two are",
        correct: "right"
    })}

// question 4
    if ((this.state.number===3) && (randNum===0)) {
      this.setState({
        number: 4,
        question: "What does 'ona je' mean?",
        left: "She is",
        center: "He is",
        right: "They are",
        correct: "left"
      })}
    if ((this.state.number===3) && (randNum===1)){
      this.setState({
        number: 4,
        question: "What does 'ona je' mean?",
        left: "They are",
        center: "She is",
        right: "He is",
        correct: "center"
      })}
    if ((this.state.number===3) && (randNum===2)) {
      this.setState({
        number: 4,
        question: "What does 'ona je' mean?",
        left: "He is",
        center: "They are",
        right: "She is",
        correct: "right"
    })}

// question 5
    if ((this.state.number===4) && (randNum===0)) {
      this.setState({
        number: 5,
        question: "What does 'mi smo' mean?",
        left: "We are",
        center: "I am",
        right: "They are",
        correct: "left"
      })}
    if ((this.state.number===4) && (randNum===1)){
      this.setState({
        number: 5,
        question: "What does 'mi smo' mean?",
        left: "They are",
        center: "We are",
        right: "I am",
        correct: "center"
      })}
    if ((this.state.number===4) && (randNum===2)) {
      this.setState({
        number: 5,
        question: "What does 'mi smo' mean?",
        left: "I am",
        center: "They are",
        right: "We are",
        correct: "right"
    })}
// question 6
    if ((this.state.number===5) && (randNum===0)) {
      this.setState({
        number: 6,
        question: "What does 'ti si' mean?",
        left: "You are (singular)",
        center: "You are (plural)",
        right: "You two are",
        correct: "left"
      })}
    if ((this.state.number===5) && (randNum===1)){
      this.setState({
        number: 6,
        question: "What does 'ti si' mean?",
        left: "You are (plural)",
        center: "You are (singular)",
        right: "You two are",
        correct: "center"
      })}
    if ((this.state.number===5) && (randNum===2)) {
      this.setState({
        number: 6,
        question: "What does 'ti si' mean?",
        left: "You two are",
        center: "You are (plural)",
        right: "You are (singular)",
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
          <h2>Level One: Biti ('to be')</h2>
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
