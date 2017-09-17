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
          <h3>{this.props.username}</h3>
        </div>

        <div className="quiz-two-main">
          <h2>Level Two: Greetings</h2>
          <div className="quiz-two-question">
            <h2>{this.state.number} of 10</h2>
            <h3>{this.state.question}</h3>
          </div>

          <div className="quiz-one-choices">
            <button onClick={this.clickLeft} className="quiz-two-answer-left"><h4>{this.state.left}</h4></button>
            <button onClick={this.clickCenter} className="quiz-two-answer-center"><h4>{this.state.center}</h4></button>
            <button onClick={this.clickRight} className="quiz-two-answer-right"><h4>{this.state.right}</h4></button>
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
