import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Register extends Component{

// method to handle addition of new user

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

// method to render page with form for registration
  render(){
    return (
      <div className="register">

        <div className="register-header">

          <div className="header-message">
            <h1>slovolingo</h1>
          </div>

        </div>

        <div className="register-main">
          <div className="sign-up">
            <h1>Sign Up</h1>
          </div>

          <form action="/auth/register" method='POST' className="register-form">
            <input type="text" name='userName' placeholder='User Name' className="register-space"
              onChange={(e)=>this.handleInputChange(e)}/>
            <input type="email" name='email' placeholder='Email' className="register-space"
              onChange={(e)=>this.handleInputChange(e)}/>
            <input type="password" name='password' placeholder='Password' className="register-space"
              onChange={(e)=>this.handleInputChange(e)}/>
            <input onClick={(e)=>this.props.handleRegisterSubmit(e, this.state)} type="submit" value='Create Profile' className="register-form-button"/>
          </form>

        </div>

        <div className="register-footer">
          <h2>Created By Dan Beebe</h2>
        </div>

      </div>
    )
  }
}

export default Register;
