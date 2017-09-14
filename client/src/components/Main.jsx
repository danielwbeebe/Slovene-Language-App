import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => {

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
          <h1>Slovene Tests</h1>
          <div className="quiz-entry">1</div>
          <div className="quiz-entry">2</div>
          <div className="quiz-entry">3</div>
          <div className="quiz-entry">4</div>
          <div className="quiz-entry">5</div>
        </div>

        <div classname="main-right">
          <div className="main-upper-right">
            <div className="main-welcome-username">
              <h2>Welcome, User</h2>
            </div>
            <h4>Level: 1</h4>
          </div>
          <div className="main-lower-right">
            <h2>Random Word to Learn</h2>
            <h4>"Word" means: translation</h4>
          </div>
        </div>

      </div>

      <div className="main-footer">
        <h2>Created By Dan Beebe</h2>
      </div>

    </div>
  )
}

export default Main;
