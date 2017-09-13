import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => {

  return (
    <div className="main-page">

      <div className="main-header">
        <div className="main-message">
          <h1>slovolingo</h1>
        </div>
      </div>

      <div className="main-main">
        <div className="main-left">
          <h1>Slovene Tests</h1>
        </div>

        <div classname="main-right">
          <div className="main-upper-right">
            <h1>Welcome, User</h1>
          </div>
          <div className="main-lower-right">
            <h1>Random Word to Learn</h1>
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
