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

// // question 2
//     if ((this.state.number===1) && (randNum===0)) {
//       this.setState({
//         number: 2,
//         question: "What does 'oni so' mean?",
//         left: "They are",
//         center: "I am",
//         right: "He is",
//         correct: "left"
//       })
//     var audio = new Audio(oniSo);
//     audio.play();
//     }
//     if ((this.state.number===1) && (randNum===1)){
//       this.setState({
//         number: 2,
//         question: "What does 'oni so' mean?",
//         left: "He is",
//         center: "They are",
//         right: "I am",
//         correct: "center"
//       })
//     var audio = new Audio(oniSo);
//     audio.play();
//     }
//     if ((this.state.number===1) && (randNum===2)) {
//       this.setState({
//         number: 2,
//         question: "What does 'oni so' mean?",
//         left: "I am",
//         center: "He is",
//         right: "They are",
//         correct: "right"
//     })
//     var audio = new Audio(oniSo);
//     audio.play();
//     }

// // question 3
//     if ((this.state.number===2) && (randNum===0)) {
//       this.setState({
//         number: 3,
//         question: "What does 'vidva sta' mean?",
//         left: "You two are",
//         center: "You are",
//         right: "She is",
//         correct: "left"
//       })
//     var audio = new Audio(vidvaSta);
//     audio.play();
//     }
//     if ((this.state.number===2) && (randNum===1)){
//       this.setState({
//         number: 3,
//         question: "What does 'vidva sta' mean?",
//         left: "She is",
//         center: "You two are",
//         right: "You are",
//         correct: "center"
//       })
//     var audio = new Audio(vidvaSta);
//     audio.play();
//     }
//     if ((this.state.number===2) && (randNum===2)) {
//       this.setState({
//         number: 3,
//         question: "What does 'vidva sta' mean?",
//         left: "You are",
//         center: "She is",
//         right: "You two are",
//         correct: "right"
//     })
//     var audio = new Audio(vidvaSta);
//     audio.play();
//     }

// // question 4
//     if ((this.state.number===3) && (randNum===0)) {
//       this.setState({
//         number: 4,
//         question: "What does 'ona je' mean?",
//         left: "She is",
//         center: "He is",
//         right: "They are",
//         correct: "left"
//       })
//     var audio = new Audio(onaJe);
//     audio.play();
//     }
//     if ((this.state.number===3) && (randNum===1)){
//       this.setState({
//         number: 4,
//         question: "What does 'ona je' mean?",
//         left: "They are",
//         center: "She is",
//         right: "He is",
//         correct: "center"
//       })
//     var audio = new Audio(onaJe);
//     audio.play();
//     }
//     if ((this.state.number===3) && (randNum===2)) {
//       this.setState({
//         number: 4,
//         question: "What does 'ona je' mean?",
//         left: "He is",
//         center: "They are",
//         right: "She is",
//         correct: "right"
//     })
//     var audio = new Audio(onaJe);
//     audio.play();
//     }

// // question 5
//     if ((this.state.number===4) && (randNum===0)) {
//       this.setState({
//         number: 5,
//         question: "What does 'mi smo' mean?",
//         left: "We are",
//         center: "I am",
//         right: "They are",
//         correct: "left"
//       })
//     var audio = new Audio(miSmo);
//     audio.play();
//     }
//     if ((this.state.number===4) && (randNum===1)){
//       this.setState({
//         number: 5,
//         question: "What does 'mi smo' mean?",
//         left: "They are",
//         center: "We are",
//         right: "I am",
//         correct: "center"
//       })
//     var audio = new Audio(miSmo);
//     audio.play();
//     }
//     if ((this.state.number===4) && (randNum===2)) {
//       this.setState({
//         number: 5,
//         question: "What does 'mi smo' mean?",
//         left: "I am",
//         center: "They are",
//         right: "We are",
//         correct: "right"
//     })
//     var audio = new Audio(miSmo);
//     audio.play();
//     }

// // question 6
//     if ((this.state.number===5) && (randNum===0)) {
//       this.setState({
//         number: 6,
//         question: "What does 'ti si' mean?",
//         left: "You are (singular)",
//         center: "You are (plural)",
//         right: "You two are",
//         correct: "left"
//       })
//     var audio = new Audio(tiSi);
//     audio.play();
//     }
//     if ((this.state.number===5) && (randNum===1)){
//       this.setState({
//         number: 6,
//         question: "What does 'ti si' mean?",
//         left: "You are (plural)",
//         center: "You are (singular)",
//         right: "You two are",
//         correct: "center"
//       })
//     var audio = new Audio(tiSi);
//     audio.play();
//     }
//     if ((this.state.number===5) && (randNum===2)) {
//       this.setState({
//         number: 6,
//         question: "What does 'ti si' mean?",
//         left: "You two are",
//         center: "You are (plural)",
//         right: "You are (singular)",
//         correct: "right"
//     })
//     var audio = new Audio(tiSi);
//     audio.play();
//     }

// // question 7
//     if ((this.state.number===6) && (randNum===0)) {
//       this.setState({
//         number: 7,
//         question: "What does 'midva sva' mean?",
//         left: "We two are",
//         center: "I am",
//         right: "We are",
//         correct: "left"
//       })
//     var audio = new Audio(midvaSva);
//     audio.play();
//     }
//     if ((this.state.number===6) && (randNum===1)){
//       this.setState({
//         number: 7,
//         question: "What does 'midva sva' mean?",
//         left: "We are",
//         center: "We two are",
//         right: "I am",
//         correct: "center"
//       })
//     var audio = new Audio(midvaSva);
//     audio.play();
//     }
//     if ((this.state.number===6) && (randNum===2)) {
//       this.setState({
//         number: 7,
//         question: "What does 'midva sva' mean?",
//         left: "I am",
//         center: "We are",
//         right: "We two are",
//         correct: "right"
//     })
//     var audio = new Audio(midvaSva);
//     audio.play();
//     }

// // question 8
//     if ((this.state.number===7) && (randNum===0)) {
//       this.setState({
//         number: 8,
//         question: "What does 'vi ste' mean?",
//         left: "You are (plural)",
//         center: "You are (singular)",
//         right: "You two are",
//         correct: "left"
//       })
//     var audio = new Audio(viSte);
//     audio.play();
//     }
//     if ((this.state.number===7) && (randNum===1)){
//       this.setState({
//         number: 8,
//         question: "What does 'vi ste' mean?",
//         left: "You two are",
//         center: "You are (plural)",
//         right: "You are (singular)",
//         correct: "center"
//       })
//     var audio = new Audio(viSte);
//     audio.play();
//     }
//     if ((this.state.number===7) && (randNum===2)) {
//       this.setState({
//         number: 8,
//         question: "What does 'vi ste' mean?",
//         left: "You are (singular)",
//         center: "You two are",
//         right: "You are (plural)",
//         correct: "right"
//     })
//     var audio = new Audio(viSte);
//     audio.play();
//     }
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
