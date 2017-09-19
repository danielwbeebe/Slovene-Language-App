import React from 'react';
import {Link} from 'react-router-dom';

import Word from './Word';

const Main = (props) => {
  console.log(props)

  return (
    <div className="main-page">
      <div className="main-header">
        <div className="main-message">
          <h1>slovolingo</h1>
        </div>
        <div className="main-logout">
          <a className="main-logout-button" href='/'>Logout</a>
        </div>
      </div>

      <div className="main-main">
        <div className="main-left">

          <div className="main-left-upper">
            <h1>Slovene Quizzes</h1>
          </div>

          <div className="main-left-lower">
            <div className="main-left-left">
              <h3>Click any number to take a quiz - learn by making mistakes and retry each quiz until you've mastered the material.</h3>
            </div>

            <div className="main-left-right">
              <Link to="/quizone"><button className="quiz-entry"><h4>1</h4></button></Link>
              <Link to="/quiztwo"><button className="quiz-entry"><h4>2</h4></button></Link>
              <Link to="/quizthree"><button className="quiz-entry"><h4>3</h4></button></Link>
              <Link to="/quizfour"><button className="quiz-entry"><h4>4</h4></button></Link>
            </div>
          </div>

        </div>

        <div className="main-right">
          <div className="main-upper-right">
            <div className="main-welcome-username">
              <h2>Welcome, {props.username}</h2>
            </div>
            <div className="main-level">
              <h3>Your level is {props.level}</h3>
              <h4>Feel comfortable with your progress? Hit the 'Level Up' button once before you leave!</h4>
              <form onSubmit={(e) => props.plusOne(e)}>
                <input type="submit" value='Level Up' className="level-up-button"/>
              </form>

            </div>
          </div>
          <div className="main-lower-right">
           <Word />
          </div>
        </div>

      </div>

      <div className="footer">
          <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
      </div>

    </div>
  )
}

export default Main;
