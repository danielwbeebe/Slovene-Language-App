import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {

  return (
    <div className="welcome">

      <div className="welcome-header">

        <div className="header-message">
          <h1>slavolingo</h1>
        </div>

        <div className="login-button">
          <h4>Login</h4>
        </div>

      </div>

      <div className="welcome-main">

        <div className="welcome-left">
          <h2>Image Here</h2>
        </div>

        <div className="welcome-right">
          <div className="welcome-message">
            <h1>Learn Slovene for free. Forever.</h1>
          </div>

          <div className="register-button">
            <h3>Get Started</h3>
          </div>
        </div>

      </div>

      <div className="welcome-footer">
       <h2>Created By Dan Beebe</h2>
      </div>

    </div>
  )
}

export default Welcome;
