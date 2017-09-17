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
            <h1 className="login-message"><Link to="/">slovolingo</Link></h1>
        </div>

        <div className="login-main">
          <div className="login-title">
            <h1>Please Login</h1>
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
          <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
        </div>

      </div>
    )
  }
}

export default Login;
