import React, {Component} from 'react';
import {Link} from 'react-router-dom';


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
          <h1>Quiz Three Page</h1>
        </div>

        <div className="quiz-three-footer">
            <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
        </div>

      </div>
    )
  }
}

export default QuizThree;
