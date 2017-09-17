import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ringSound from './ring.wav';
import knockSound from './knock.wav';

class QuizOne extends Component {
  constructor(){
    super();
      this.state = {
        number: 0,
        question: " ",
        left: " ",
        center: " ",
        right: " ",
        correct: " ",
        clicked: " ",
        done: false,
      }
    this.randomOrder = this.randomOrder.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.clickCenter = this.clickCenter.bind(this);
    this.clickRight = this.clickRight.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.checkCorrect = this.checkCorrect.bind(this);
  }

  componentDidMount() {
    this.randomOrder();
  }

  clickLeft() {
    console.log(this.state.correct)
    if (this.state.correct==="left") {
      console.log("correct!")
      this.checkCorrect();
    }
    else {
      console.log("wrong!")
      this.isWrong();
    }
  }

  clickCenter() {
    console.log(this.state.correct)
    if (this.state.correct==="center") {
      console.log("correct!")
      this.checkCorrect();
    }
    else {
      console.log("wrong!")
      this.isWrong();
    }
  }

  clickRight() {
    console.log(this.state.correct)
    if (this.state.correct==="right") {
      console.log("correct!")
      this.checkCorrect();
    }
    else {
      console.log("wrong!")
      this.isWrong();
    }
  }

  checkCorrect() {
    var audio = new Audio(ringSound);
    audio.play();
    this.componentDidMount();
  }

  isWrong() {
    var audio = new Audio(knockSound);
    audio.play();
  }

  randomOrder() {
    var randNum = Math.floor(Math.random() * 3);

// question 1
    if ((this.state.number===0) && (randNum===0)) {
      this.setState({
        number: 1,
        question: "What does 'jaz sem' mean?",
        left: "I am",
        center: "They are",
        right: "He is",
        correct: "left"
      })}
    if ((this.state.number===0) && (randNum===1)){
      this.setState({
        number: 1,
        question: "What does 'jaz sem' mean?",
        left: "He is",
        center: "I am",
        right: "They are",
        correct: "center"
      })}
    if ((this.state.number===0) && (randNum===2)) {
      this.setState({
        number: 1,
        question: "What does 'jaz sem' mean?",
        left: "They are",
        center: "He is",
        right: "I am",
        correct: "right"
    })}

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
// question 7
    if ((this.state.number===6) && (randNum===0)) {
      this.setState({
        number: 7,
        question: "What does 'midva sva' mean?",
        left: "We two are",
        center: "I am",
        right: "We are",
        correct: "left"
      })}
    if ((this.state.number===6) && (randNum===1)){
      this.setState({
        number: 7,
        question: "What does 'midva sva' mean?",
        left: "We are",
        center: "We two are",
        right: "I am",
        correct: "center"
      })}
    if ((this.state.number===6) && (randNum===2)) {
      this.setState({
        number: 7,
        question: "What does 'midva sva' mean?",
        left: "I am",
        center: "We are",
        right: "We two are",
        correct: "right"
    })}
// question 8
    if ((this.state.number===7) && (randNum===0)) {
      this.setState({
        number: 8,
        question: "What does 'vi ste' mean?",
        left: "You are (plural)",
        center: "You are (singular)",
        right: "You two are",
        correct: "left"
      })}
    if ((this.state.number===7) && (randNum===1)){
      this.setState({
        number: 8,
        question: "What does 'vi ste' mean?",
        left: "You two are",
        center: "You are (plural)",
        right: "You are (singular)",
        correct: "center"
      })}
    if ((this.state.number===7) && (randNum===2)) {
      this.setState({
        number: 8,
        question: "What does 'vi ste' mean?",
        left: "You are (singular)",
        center: "You two are",
        right: "You are (plural)",
        correct: "right"
    })}
// question 9
    if ((this.state.number===8) && (randNum===0)) {
      this.setState({
        number: 9,
        question: "What does 'onadva sta' mean?",
        left: "They two are",
        center: "They are",
        right: "He is",
        correct: "left"
      })}
    if ((this.state.number===8) && (randNum===1)){
      this.setState({
        number: 9,
        question: "What does 'onadva sta' mean?",
        left: "He is",
        center: "They two are",
        right: "They are",
        correct: "center"
      })}
    if ((this.state.number===8) && (randNum===2)) {
      this.setState({
        number: 9,
        question: "What does 'onadva sta' mean?",
        left: "They are",
        center: "He is",
        right: "They two are",
        correct: "right"
    })}
// question 10
    if ((this.state.number===9) && (randNum===0)) {
      this.setState({
        number: 10,
        question: "What does 'on je' mean?",
        left: "He is",
        center: "She is",
        right: "They are",
        correct: "left"
      })}
    if ((this.state.number===9) && (randNum===1)){
      this.setState({
        number: 10,
        question: "What does 'on je' mean?",
        left: "They are",
        center: "He is",
        right: "She is",
        correct: "center"
      })}
    if ((this.state.number===9) && (randNum===2)) {
      this.setState({
        number: 10,
        question: "What does 'on je' mean?",
        left: "She is",
        center: "They are",
        right: "He is",
        correct: "right"
    })}
  if (this.state.number===10) {
    this.setState({
      question: "Congratulations! You're Done!",
      left: " ",
      center: " ",
      right: "  ",
      correct: "  "
    })}
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
            <h2>{this.state.number} of 10</h2>
            <h3>{this.state.question}</h3>
          </div>

          <div className="quiz-one-choices">
            <button onClick={this.clickLeft} className="quiz-one-answer-left"><h4>{this.state.left}</h4></button>
            <button onClick={this.clickCenter} className="quiz-one-answer-center"><h4>{this.state.center}</h4></button>
            <button onClick={this.clickRight} className="quiz-one-answer-right"><h4>{this.state.right}</h4></button>
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
