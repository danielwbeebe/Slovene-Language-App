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
  }

  render(){

    return (
      <div className="quiz-three">

        <div className="quiz-three-header">
          <h1 className="quiz-three-message"><Link to="/main">slovolingo</Link></h1>
          <h3>{this.props.username}</h3>
        </div>

        <div className="quiz-three-main">

          <h2>Level Three: Days of the Week</h2>
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

        <div className="quiz-three-footer">
            <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
        </div>

      </div>
    )
  }
}

export default QuizThree;
