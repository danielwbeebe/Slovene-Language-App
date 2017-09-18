import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ringSound from './audio/ring.wav';
import knockSound from './audio/knock.wav';

import ena from './audio/ena.m4a';
import dve from './audio/dve.m4a';
import tri from './audio/tri.m4a';
import stiri from './audio/stiri.m4a';
import pet from './audio/pet.m4a';

import sest from './audio/sest.m4a';
import sedem from './audio/sedem.m4a';
import osem from './audio/osem.m4a';
import devet from './audio/devet.m4a';
import deset from './audio/deset.m4a';

class QuizFour extends Component {
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
    if (this.state.correct==="left") {
      this.checkCorrect();
    }
    else {
      this.isWrong();
    }
  }

  clickCenter() {
    if (this.state.correct==="center") {
      this.checkCorrect();
    }
    else {
      this.isWrong();
    }
  }

  clickRight() {
    if (this.state.correct==="right") {
      this.checkCorrect();
    }
    else {
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
        question: "What does 'tri' mean?",
        left: "Three",
        center: "Two",
        right: "Four",
        correct: "left"
      })
    var audio = new Audio(tri);
    audio.play();
    }
    if ((this.state.number===0) && (randNum===1)){
      this.setState({
        number: 1,
        question: "What does 'tri' mean?",
        left: "Four",
        center: "Three",
        right: "Two",
        correct: "center"
      })
    var audio = new Audio(tri);
    audio.play();
    }
    if ((this.state.number===0) && (randNum===2)) {
      this.setState({
        number: 1,
        question: "What does 'tri' mean?",
        left: "Two",
        center: "Four",
        right: "Three",
        correct: "right"
      })
    var audio = new Audio(tri);
    audio.play();
    }

// question 2
    if ((this.state.number===1) && (randNum===0)) {
      this.setState({
        number: 2,
        question: "What does 'osem' mean?",
        left: "Eight",
        center: "One",
        right: "Three",
        correct: "left"
      })
    audio = new Audio(osem);
    audio.play();
    }
    if ((this.state.number===1) && (randNum===1)){
      this.setState({
        number: 2,
        question: "What does 'osem' mean?",
        left: "Three",
        center: "Eight",
        right: "One",
        correct: "center"
      })
    audio = new Audio(osem);
    audio.play();
    }
    if ((this.state.number===1) && (randNum===2)) {
      this.setState({
        number: 2,
        question: "What does 'osem' mean?",
        left: "One",
        center: "Three",
        right: "Eight",
        correct: "right"
    })
    audio = new Audio(osem);
    audio.play();
    }

// question 3
    if ((this.state.number===2) && (randNum===0)) {
      this.setState({
        number: 3,
        question: "What does 'pet' mean?",
        left: "Five",
        center: "Eight",
        right: "Four",
        correct: "left"
      })
    audio = new Audio(pet);
    audio.play();
    }
    if ((this.state.number===2) && (randNum===1)){
      this.setState({
        number: 3,
        question: "What does 'pet' mean?",
        left: "Four",
        center: "Five",
        right: "Eight",
        correct: "center"
      })
    audio = new Audio(pet);
    audio.play();
    }
    if ((this.state.number===2) && (randNum===2)) {
      this.setState({
        number: 3,
        question: "What does 'pet' mean?",
        left: "Eight",
        center: "Four",
        right: "Five",
        correct: "right"
    })
    audio = new Audio(pet);
    audio.play();
    }

// question 4
    if ((this.state.number===3) && (randNum===0)) {
      this.setState({
        number: 4,
        question: "What does 'sedem' mean?",
        left: "Seven",
        center: "Six",
        right: "Five",
        correct: "left"
      })
    audio = new Audio(sedem);
    audio.play();
    }
    if ((this.state.number===3) && (randNum===1)){
      this.setState({
        number: 4,
        question: "What does 'sedem' mean?",
        left: "Five",
        center: "Seven",
        right: "Six",
        correct: "center"
      })
    audio = new Audio(sedem);
    audio.play();
    }
    if ((this.state.number===3) && (randNum===2)) {
      this.setState({
        number: 4,
        question: "What does 'sedem' mean?",
        left: "Six",
        center: "Five",
        right: "Seven",
        correct: "right"
    })
    audio = new Audio(sedem);
    audio.play();
    }

// question 5
    if ((this.state.number===4) && (randNum===0)) {
      this.setState({
        number: 5,
        question: "What does 'ena' mean?",
        left: "One",
        center: "Two",
        right: "Three",
        correct: "left"
      })
    audio = new Audio(ena);
    audio.play();
    }
    if ((this.state.number===4) && (randNum===1)){
      this.setState({
        number: 5,
        question: "What does 'ena' mean?",
        left: "Three",
        center: "One",
        right: "Two",
        correct: "center"
      })
    audio = new Audio(ena);
    audio.play();
    }
    if ((this.state.number===4) && (randNum===2)) {
      this.setState({
        number: 5,
        question: "What does 'ena' mean?",
        left: "Two",
        center: "Three",
        right: "One",
        correct: "right"
    })
    audio = new Audio(ena);
    audio.play();
    }

// question 6
    if ((this.state.number===5) && (randNum===0)) {
      this.setState({
        number: 6,
        question: "What does 'devet' mean?",
        left: "Nine",
        center: "Ten",
        right: "Two",
        correct: "left"
      })
    audio = new Audio(devet);
    audio.play();
    }
    if ((this.state.number===5) && (randNum===1)){
      this.setState({
        number: 6,
        question: "What does 'devet' mean?",
        left: "Two",
        center: "Nine",
        right: "Ten",
        correct: "center"
      })
    audio = new Audio(devet);
    audio.play();
    }
    if ((this.state.number===5) && (randNum===2)) {
      this.setState({
        number: 6,
        question: "What does 'devet' mean?",
        left: "Ten",
        center: "Two",
        right: "Nine",
        correct: "devet"
    })
    audio = new Audio(devet);
    audio.play();
    }

// question 7
    if ((this.state.number===6) && (randNum===0)) {
      this.setState({
        number: 7,
        question: "What does 'dve' mean?",
        left: "Two",
        center: "Four",
        right: "Nine",
        correct: "left"
      })
    audio = new Audio(dve);
    audio.play();
    }
    if ((this.state.number===6) && (randNum===1)){
      this.setState({
        number: 7,
        question: "What does 'dve' mean?",
        left: "Nine",
        center: "Two",
        right: "Four",
        correct: "center"
      })
    audio = new Audio(dve);
    audio.play();
    }
    if ((this.state.number===6) && (randNum===2)) {
      this.setState({
        number: 7,
        question: "What does 'dve' mean?",
        left: "Four",
        center: "Nine",
        right: "Two",
        correct: "right"
    })
    audio = new Audio(dve);
    audio.play();
    }

// question 8
    if ((this.state.number===7) && (randNum===0)) {
      this.setState({
        number: 8,
        question: "What does 'deset' mean?",
        left: "Ten",
        center: "Nine",
        right: "Two",
        correct: "left"
      })
    audio = new Audio(deset);
    audio.play();
    }
    if ((this.state.number===7) && (randNum===1)){
      this.setState({
        number: 8,
        question: "What does 'deset' mean?",
        left: "Two",
        center: "Ten",
        right: "Nine",
        correct: "center"
      })
    audio = new Audio(deset);
    audio.play();
    }
    if ((this.state.number===7) && (randNum===2)) {
      this.setState({
        number: 8,
        question: "What does 'deset' mean?",
        left: "Nine",
        center: "Two",
        right: "Ten",
        correct: "right"
    })
    audio = new Audio(deset);
    audio.play();
    }

// question 9
    if ((this.state.number===8) && (randNum===0)) {
      this.setState({
        number: 9,
        question: "What does 'šest' mean?",
        left: "Six",
        center: "Seven",
        right: "Four",
        correct: "left"
      })
    audio = new Audio(sest);
    audio.play();
    }
    if ((this.state.number===8) && (randNum===1)){
      this.setState({
        number: 9,
        question: "What does 'šest' mean?",
        left: "Four",
        center: "Six",
        right: "Seven",
        correct: "center"
      })
    audio = new Audio(sest);
    audio.play();
    }
    if ((this.state.number===8) && (randNum===2)) {
      this.setState({
        number: 9,
        question: "What does 'šest' mean?",
        left: "Seven",
        center: "Four",
        right: "Six",
        correct: "right"
    })
    audio = new Audio(sest);
    audio.play();
    }

// question 10
    if ((this.state.number===9) && (randNum===0)) {
      this.setState({
        number: 10,
        question: "What does 'štiri' mean?",
        left: "Four",
        center: "Five",
        right: "Six",
        correct: "left"
      })
    audio = new Audio(stiri);
    audio.play();
    }
    if ((this.state.number===9) && (randNum===1)){
      this.setState({
        number: 10,
        question: "What does 'štiri' mean?",
        left: "Six",
        center: "Four",
        right: "Five",
        correct: "center"
      })
    audio = new Audio(stiri);
    audio.play();
    }
    if ((this.state.number===9) && (randNum===2)) {
      this.setState({
        number: 10,
        question: "What does 'štiri' mean?",
        left: "Five",
        center: "Six",
        right: "Four",
        correct: "right"
    })
    audio = new Audio(stiri);
    audio.play();
    }

    if (this.state.number===10) {
    this.setState({
      question: "Congratulations! You Finished Quiz Three!",
      left: " ",
      center: "Click 'slovolingo' above to return home",
      right: "  ",
      correct: "  "
    })}
  }

  render(){

    return (
      <div className="quiz-four">

        <div className="quiz-four-header">
          <h1 className="quiz-four-message"><Link to="/main">slovolingo</Link></h1>
          <h3>{this.props.username}</h3>
        </div>

        <div className="quiz-four-main">

          <h2>Quiz Four: Numbers</h2>
          <div className="quiz-four-question">
            <h2>{this.state.number} of 10</h2>
            <h3>{this.state.question}</h3>
          </div>

          <div className="quiz-four-choices">
            <button onClick={this.clickLeft} className="quiz-answer"><h4>{this.state.left}</h4></button>
            <button onClick={this.clickCenter} className="quiz-answer"><h4>{this.state.center}</h4></button>
            <button onClick={this.clickRight} className="quiz-answer"><h4>{this.state.right}</h4></button>
          </div>

        </div>

        <div className="footer">
            <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
        </div>

      </div>
    )
  }
}

export default QuizFour;
