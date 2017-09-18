import React from 'react';
import {Link} from 'react-router-dom';

const Main = (props) => {
  console.log(props)
  return (
    <div className="main-page">
      <div className="main-header">
        <div className="main-message">
          <h1>slovolingo</h1>
        </div>
        <div className="main-logout">
          <Link to="/"><button className="main-logout-button"><p>Logout</p></button></Link>
        </div>
      </div>

      <div className="main-main">
        <div className="main-left">
          <h1>Slovene Test Levels</h1>
          <Link to="/quizone"><button className="quiz-entry"><h4>1</h4></button></Link>
          <Link to="/quiztwo"><button className="quiz-entry"><h4>2</h4></button></Link>
          <Link to="/quizthree"><button className="quiz-entry"><h4>3</h4></button></Link>
        </div>

        <div className="main-right">
          <div className="main-upper-right">
            <div className="main-welcome-username">
              <h2>Welcome, {props.username}</h2>
            </div>
            <div className="main-level">
              <h3>You are user number {props.id}</h3>
              <h3>You're at Level {props.level}</h3>
            </div>
          </div>
          <div className="main-lower-right">
            <h2>Random Word to Learn</h2>
            <h4>"Word" means: translation</h4>
          </div>
        </div>

      </div>

      <div className="main-footer">
          <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
      </div>

    </div>
  )
}

export default Main;
