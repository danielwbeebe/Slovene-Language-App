import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {

  return (
    <div className="welcome">

      <div className="welcome-header">

        <div className="header-message">
          <h1>slovolingo</h1>
        </div>

        <div className="login-button">
          <h4>Login</h4>
        </div>

      </div>

      <div className="welcome-main">

        <div className="welcome-left">
          <div className="welcome-message">
            <h1>Learn Slovene! It's fun!</h1>
          </div>

          <div className="register-button">
            <h3>Register</h3>
          </div>
        </div>

        <div className="welcome-right">
          <img src="/slovenia-lake.png" width="300" height="300"></img>
        </div>

      </div>

      <div className="welcome-footer">
       <h2>Created By Dan Beebe</h2>
      </div>

    </div>
  )
}

export default Welcome;
