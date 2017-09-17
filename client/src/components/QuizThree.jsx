import React from 'react';
import {Link} from 'react-router-dom';


const QuizThree = () => {

  return (
    <div className="quiz-three">

      <div className="quiz-three-header">
        <h1 className="quiz-three-message"><Link to="/main">slovolingo</Link></h1>
      </div>

      <div className="quiz-three-main">
        <h1>Quiz Three Page</h1>
      </div>

      <div className="quiz-three-footer">
          <a href="https://github.com/danielwbeebe" target="_blank"><h2>Created By Dan Beebe</h2></a>
      </div>

    </div>
  )
}

export default QuizThree;
