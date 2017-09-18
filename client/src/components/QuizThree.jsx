import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ringSound from './audio/ring.wav';
import knockSound from './audio/knock.wav';

import ponedeljek from './audio/ponedeljek.m4a';
import torek from './audio/torek.m4a';
import sreda from './audio/sreda.m4a';
import cetrtek from './audio/cetrtek.m4a';
import petek from './audio/petek.m4a';

import sobota from './audio/sobota.m4a';
import nedelja from './audio/nedelja.m4a';


class QuizThree extends Component {
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
        question: "What does 'ponedeljek' mean?",
        left: "Monday",
        center: "Tuesday",
        right: "Wednesday",
        correct: "left"
      })
    var audio = new Audio(ponedeljek);
    audio.play();
    }
    if ((this.state.number===0) && (randNum===1)){
      this.setState({
        number: 1,
        question: "What does 'ponedeljek' mean?",
        left: "Wednesday",
        center: "Monday",
        right: "Tuesday",
        correct: "center"
      })
    var audio = new Audio(ponedeljek);
    audio.play();
    }
    if ((this.state.number===0) && (randNum===2)) {
      this.setState({
        number: 1,
        question: "What does 'ponedeljek' mean?",
        left: "Tuesday",
        center: "Wednesday",
        right: "Monday",
        correct: "right"
      })
    var audio = new Audio(ponedeljek);
    audio.play();
    }

// question 2
    if ((this.state.number===1) && (randNum===0)) {
      this.setState({
        number: 2,
        question: "What does 'petek' mean?",
        left: "Friday",
        center: "Monday",
        right: "Wednesday",
        correct: "left"
      })
    audio = new Audio(petek);
    audio.play();
    }
    if ((this.state.number===1) && (randNum===1)){
      this.setState({
        number: 2,
        question: "What does 'petek' mean?",
        left: "Wednesday",
        center: "Friday",
        right: "Monday",
        correct: "center"
      })
    audio = new Audio(petek);
    audio.play();
    }
    if ((this.state.number===1) && (randNum===2)) {
      this.setState({
        number: 2,
        question: "What does 'petek' mean?",
        left: "Monday",
        center: "Wednesday",
        right: "Friday",
        correct: "right"
    })
    audio = new Audio(petek);
    audio.play();
    }

// question 3
    if ((this.state.number===2) && (randNum===0)) {
      this.setState({
        number: 3,
        question: "What does 'sobota' mean?",
        left: "Saturday",
        center: "Friday",
        right: "Sunday",
        correct: "left"
      })
    audio = new Audio(sobota);
    audio.play();
    }
    if ((this.state.number===2) && (randNum===1)){
      this.setState({
        number: 3,
        question: "What does 'sobota' mean?",
        left: "Sunday",
        center: "Saturday",
        right: "Friday",
        correct: "center"
      })
    audio = new Audio(sobota);
    audio.play();
    }
    if ((this.state.number===2) && (randNum===2)) {
      this.setState({
        number: 3,
        question: "What does 'sobota' mean?",
        left: "Friday",
        center: "Sunday",
        right: "Saturday",
        correct: "right"
    })
    audio = new Audio(sobota);
    audio.play();
    }

// question 4
    if ((this.state.number===3) && (randNum===0)) {
      this.setState({
        number: 4,
        question: "What does 'torek' mean?",
        left: "Tuesday",
        center: "Wednesday",
        right: "Thursday",
        correct: "left"
      })
    audio = new Audio(torek);
    audio.play();
    }
    if ((this.state.number===3) && (randNum===1)){
      this.setState({
        number: 4,
        question: "What does 'torek' mean?",
        left: "Thursday",
        center: "Tuesday",
        right: "Wednesday",
        correct: "center"
      })
    audio = new Audio(torek);
    audio.play();
    }
    if ((this.state.number===3) && (randNum===2)) {
      this.setState({
        number: 4,
        question: "What does 'torek' mean?",
        left: "Wednesday",
        center: "Thursday",
        right: "Tuesday",
        correct: "right"
    })
    audio = new Audio(torek);
    audio.play();
    }

// question 5
    if ((this.state.number===4) && (randNum===0)) {
      this.setState({
        number: 5,
        question: "What does 'četrtek' mean?",
        left: "Thursday",
        center: "Monday",
        right: "Tuesday",
        correct: "left"
      })
    audio = new Audio(cetrtek);
    audio.play();
    }
    if ((this.state.number===4) && (randNum===1)){
      this.setState({
        number: 5,
        question: "What does 'četrtek' mean?",
        left: "Tuesday",
        center: "Thursday",
        right: "Monday",
        correct: "center"
      })
    audio = new Audio(cetrtek);
    audio.play();
    }
    if ((this.state.number===4) && (randNum===2)) {
      this.setState({
        number: 5,
        question: "What does 'četrtek' mean?",
        left: "Monday",
        center: "Tuesday",
        right: "Thursday",
        correct: "right"
    })
    audio = new Audio(cetrtek);
    audio.play();
    }

// question 6
    if ((this.state.number===5) && (randNum===0)) {
      this.setState({
        number: 6,
        question: "What does 'sreda' mean?",
        left: "Wednesday",
        center: "Thursday",
        right: "Friday",
        correct: "left"
      })
    audio = new Audio(sreda);
    audio.play();
    }
    if ((this.state.number===5) && (randNum===1)){
      this.setState({
        number: 6,
        question: "What does 'sreda' mean?",
        left: "Friday",
        center: "Wednesday",
        right: "Thursday",
        correct: "center"
      })
    audio = new Audio(sreda);
    audio.play();
    }
    if ((this.state.number===5) && (randNum===2)) {
      this.setState({
        number: 6,
        question: "What does 'sreda' mean?",
        left: "Thursday",
        center: "Friday",
        right: "Wednesday",
        correct: "right"
    })
    audio = new Audio(sreda);
    audio.play();
    }

// question 7
    if ((this.state.number===6) && (randNum===0)) {
      this.setState({
        number: 7,
        question: "What does 'nedelja' mean?",
        left: "Sunday",
        center: "Monday",
        right: "Saturday",
        correct: "left"
      })
    audio = new Audio(nedelja);
    audio.play();
    }
    if ((this.state.number===6) && (randNum===1)){
      this.setState({
        number: 7,
        question: "What does 'nedelja' mean?",
        left: "Saturday",
        center: "Sunday",
        right: "Monday",
        correct: "center"
      })
    audio = new Audio(nedelja);
    audio.play();
    }
    if ((this.state.number===6) && (randNum===2)) {
      this.setState({
        number: 7,
        question: "What does 'nedelja' mean?",
        left: "Monday",
        center: "Saturday",
        right: "Sunday",
        correct: "right"
    })
    audio = new Audio(nedelja);
    audio.play();
    }

    if (this.state.number===7) {
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
      <div className="quiz-three">

        <div className="quiz-three-header">
          <h1 className="quiz-three-message"><Link to="/main">slovolingo</Link></h1>
          <h3>{this.props.username}</h3>
        </div>

        <div className="quiz-three-main">

          <h2>Quiz Three: Days of the Week</h2>
          <div className="quiz-three-question">
            <h2>{this.state.number} of 7</h2>
            <h3>{this.state.question}</h3>
          </div>

          <div className="quiz-three-choices">
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

export default QuizThree;
