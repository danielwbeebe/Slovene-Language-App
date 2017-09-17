import React, {Component} from 'react';
import {Link} from 'react-router-dom';


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
  }

  render(){
    return (
      <div className="quiz-two">

        <div className="quiz-two-header">
          <h1 className="quiz-two-message"><Link to="/main">slovolingo</Link></h1>
        </div>

        <div className="quiz-two-main">
          <h1>Quiz Two Page</h1>
        </div>

        <div className="quiz-two-footer">
          <h2>Created By Dan Beebe</h2>
        </div>

      </div>
    )
  }
}

export default QuizTwo;
