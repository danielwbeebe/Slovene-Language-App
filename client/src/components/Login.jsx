import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component{

// method to handle login of returning user
  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

// method to render page with form for login
  render(){
    return (
      <div className="login">

        <div className="login-header">

          <div className="login-message">
            <h1>slovolingo</h1>
          </div>

        </div>

        <div className="login-main">
          <div className="login-title">
            <h1>Welcome Back!</h1>
          </div>

          <form action="/auth/login" method='POST' className="login-form">
            <input type="text" name='userName' placeholder='User Name' className="login-space"
              onChange={(e)=>this.handleInputChange(e)}/>
            <input type="password" name='password' placeholder='Password' className="login-space"
              onChange={(e)=>this.handleInputChange(e)}/>
            <input onClick={(e)=>this.props.handleLoginSubmit(e,this.state.userName, this.state.password)} type="submit" value='Sign In' className="login-form-button"/>
          </form>

        </div>

        <div className="login-footer">
          <h2>Created By Dan Beebe</h2>
        </div>

      </div>
    )
  }
}

export default Login;
