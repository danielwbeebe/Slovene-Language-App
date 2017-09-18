import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ringSound from './audio/ring.wav';
import knockSound from './audio/knock.wav';

import doberDan from './audio/doberdan.m4a';
import zivjo from './audio/zivjo.m4a';
import naSvidenje from './audio/nasvidenje.m4a';
import zdravo from './audio/zdravo.m4a';
import adijo from './audio/adijo.m4a';

import dobroJutro from './audio/dobrojutro.m4a';
import doberVecer from './audio/dobervecer.m4a';
import lahkoNoc from './audio/lahkonoc.m4a';

class QuizTwo extends Component {
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
        question: "What does 'dober dan' mean?",
        left: "Hello",
        center: "Hi",
        right: "Good-bye",
        correct: "left"
      })
    var audio = new Audio(doberDan);
    audio.play();
    }
    if ((this.state.number===0) && (randNum===1)){
      this.setState({
        number: 1,
        question: "What does 'dober dan' mean?",
        left: "Good-bye",
        center: "Hello",
        right: "Hi",
        correct: "center"
      })
    var audio = new Audio(doberDan);
    audio.play();
    }
    if ((this.state.number===0) && (randNum===2)) {
      this.setState({
        number: 1,
        question: "What does 'dober dan' mean?",
        left: "Hi",
        center: "Good-bye",
        right: "Hello",
        correct: "right"
      })
    var audio = new Audio(doberDan);
    audio.play();
    }

// question 2
    if ((this.state.number===1) && (randNum===0)) {
      this.setState({
        number: 2,
        question: "What does 'živjo' mean?",
        left: "Hi",
        center: "Hello",
        right: "Bye",
        correct: "left"
      })
    var audio = new Audio(zivjo);
    audio.play();
    }
    if ((this.state.number===1) && (randNum===1)){
      this.setState({
        number: 2,
        question: "What does 'živjo' mean?",
        left: "Bye",
        center: "Hi",
        right: "Hello",
        correct: "center"
      })
    var audio = new Audio(zivjo);
    audio.play();
    }
    if ((this.state.number===1) && (randNum===2)) {
      this.setState({
        number: 2,
        question: "What does 'živjo' mean?",
        left: "Hello",
        center: "Bye",
        right: "Hi",
        correct: "right"
    })
    var audio = new Audio(zivjo);
    audio.play();
    }

// question 3
    if ((this.state.number===2) && (randNum===0)) {
      this.setState({
        number: 3,
        question: "What does 'na svidenje' mean?",
        left: "Good-bye",
        center: "Bye",
        right: "Hello",
        correct: "left"
      })
    var audio = new Audio(naSvidenje);
    audio.play();
    }
    if ((this.state.number===2) && (randNum===1)){
      this.setState({
        number: 3,
        question: "What does 'na svidenje' mean?",
        left: "Hello",
        center: "Good-bye",
        right: "Bye",
        correct: "center"
      })
    var audio = new Audio(naSvidenje);
    audio.play();
    }
    if ((this.state.number===2) && (randNum===2)) {
      this.setState({
        number: 3,
        question: "What does 'na svidenje' mean?",
        left: "Bye",
        center: "Hello",
        right: "Good-bye",
        correct: "right"
    })
    var audio = new Audio(naSvidenje);
    audio.play();
    }

// question 4
    if ((this.state.number===3) && (randNum===0)) {
      this.setState({
        number: 4,
        question: "What does 'zdravo' mean?",
        left: "Bye",
        center: "Good-bye",
        right: "Hi",
        correct: "left"
      })
    var audio = new Audio(zdravo);
    audio.play();
    }
    if ((this.state.number===3) && (randNum===1)){
      this.setState({
        number: 4,
        question: "What does 'zdravo' mean?",
        left: "Hi",
        center: "Bye",
        right: "Good-bye",
        correct: "center"
      })
    var audio = new Audio(zdravo);
    audio.play();
    }
    if ((this.state.number===3) && (randNum===2)) {
      this.setState({
        number: 4,
        question: "What does 'zdravo' mean?",
        left: "Good-bye",
        center: "Hi",
        right: "Bye",
        correct: "right"
    })
    var audio = new Audio(zdravo);
    audio.play();
    }

// question 5
    if ((this.state.number===4) && (randNum===0)) {
      this.setState({
        number: 5,
        question: "What does 'adijo' mean?",
        left: "Bye",
        center: "Good-bye",
        right: "Hi",
        correct: "left"
      })
    var audio = new Audio(adijo);
    audio.play();
    }
    if ((this.state.number===4) && (randNum===1)){
      this.setState({
        number: 5,
        question: "What does 'adijo' mean?",
        left: "Hi",
        center: "Bye",
        right: "Good-bye",
        correct: "center"
      })
    var audio = new Audio(adijo);
    audio.play();
    }
    if ((this.state.number===4) && (randNum===2)) {
      this.setState({
        number: 5,
        question: "What does 'adijo' mean?",
        left: "Good-bye",
        center: "Hi",
        right: "Bye",
        correct: "right"
    })
    var audio = new Audio(adijo);
    audio.play();
    }

// question 6
    if ((this.state.number===5) && (randNum===0)) {
      this.setState({
        number: 6,
        question: "What does 'dobro jutro' mean?",
        left: "Good morning",
        center: "Good evening",
        right: "Good night",
        correct: "left"
      })
    var audio = new Audio(dobroJutro);
    audio.play();
    }
    if ((this.state.number===5) && (randNum===1)){
      this.setState({
        number: 6,
        question: "What does 'dobro jutro' mean?",
        left: "Good night",
        center: "Good morning",
        right: "Good evening",
        correct: "center"
      })
    var audio = new Audio(dobroJutro);
    audio.play();
    }
    if ((this.state.number===5) && (randNum===2)) {
      this.setState({
        number: 6,
        question: "What does 'dobro jutro' mean?",
        left: "Good evening",
        center: "Good night",
        right: "Good morning",
        correct: "right"
    })
    var audio = new Audio(dobroJutro);
    audio.play();
    }

// question 7
    if ((this.state.number===6) && (randNum===0)) {
      this.setState({
        number: 7,
        question: "What does 'dober večer' mean?",
        left: "Good evening",
        center: "Good night",
        right: "Good morning",
        correct: "left"
      })
    var audio = new Audio(doberVecer);
    audio.play();
    }
    if ((this.state.number===6) && (randNum===1)){
      this.setState({
        number: 7,
        question: "What does 'dober večer' mean?",
        left: "Good morning",
        center: "Good evening",
        right: "Good night",
        correct: "center"
      })
    var audio = new Audio(doberVecer);
    audio.play();
    }
    if ((this.state.number===6) && (randNum===2)) {
      this.setState({
        number: 7,
        question: "What does 'dober večer' mean?",
        left: "Good night",
        center: "Good morning",
        right: "Good evening",
        correct: "right"
    })
    var audio = new Audio(doberVecer);
    audio.play();
    }

// question 8
    if ((this.state.number===7) && (randNum===0)) {
      this.setState({
        number: 8,
        question: "What does 'lahko noč' mean?",
        left: "Good night",
        center: "Good morning",
        right: "Good evening",
        correct: "left"
      })
    var audio = new Audio(lahkoNoc);
    audio.play();
    }
    if ((this.state.number===7) && (randNum===1)){
      this.setState({
        number: 8,
        question: "What does 'lahko noč' mean?",
        left: "Good evening",
        center: "Good night",
        right: "Good morning",
        correct: "center"
      })
    var audio = new Audio(lahkoNoc);
    audio.play();
    }
    if ((this.state.number===7) && (randNum===2)) {
      this.setState({
        number: 8,
        question: "What does 'lahko noč' mean?",
        left: "Good morning",
        center: "Good evening",
        right: "Good night",
        correct: "right"
    })
    var audio = new Audio(lahkoNoc);
    audio.play();
    }
    if (this.state.number===8) {
    this.setState({
      question: "Congratulations! You Finished Quiz Two!",
      left: " ",
      center: "Click 'slovolingo' above to return home",
      right: "  ",
      correct: "  "
    })}
  }

  render(){
    return (
      <div className="quiz-two">

        <div className="quiz-two-header">
          <h1 className="quiz-two-message"><Link to="/main">slovolingo</Link></h1>
          <h3>{this.props.username}</h3>
        </div>

        <div className="quiz-two-main">
          <h2>Level Two: Greetings</h2>
          <div className="quiz-two-question">
            <h2>{this.state.number} of 8</h2>
            <h3>{this.state.question}</h3>
          </div>

          <div className="quiz-two-choices">
            <button onClick={this.clickLeft} className="quiz-answer"><h4>{this.state.left}</h4></button>
            <button onClick={this.clickCenter} className="quiz-answer"><h4>{this.state.center}</h4></button>
            <button onClick={this.clickRight} className="quiz-answer"><h4>{this.state.right}</h4></button>
          </div>
        </div>

        <div className="quiz-two-footer">
          <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
        </div>

      </div>
    )
  }
}

export default QuizTwo;
