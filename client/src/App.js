import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Redirect } from 'react-router';

import Welcome from './components/Welcome';
import Register from './components/Register';

import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = {
      redirect: false,
      redirecting: '',
    }
  }

  handleLoginSubmit = (e, username, password) => {
    e.preventDefault();
    axios.post('/auth/login', {
      username,
      password,
    }).then(res => {
      console.log(res.data.user)

      this.setState({
        auth: res.data.auth,
        user: res.data.user,
      });
      this.handleRedirect('/main')
    }).catch(err => console.log(err));
  }

  handleRegisterSubmit = (e, options) => {
    e.preventDefault();
    axios.post('/auth/register', {
      options
    })
    .then(res => {
      console.log("Options:")
      console.log(options)
      console.log('Res Data:')
      console.log(res.data)
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
      })
      window.location.href = '/'
    })
    .catch(err => console.log(err));
  }

  handleRedirect = (path) => {
    this.setState({
      redirect: true,
      redirecting: path,
    })
    console.log(`The path is: ` + path)

  }

  logOut() {
    axios.get('/auth/logout')
      .then(res => {
        this.setState({
          auth: false,
          currentPage: 'welcome',
        })
      }).catch(err => console.log(err));
  }

  redirectTo = () => {
    if(this.state.redirect){
      console.log('redirect')
      this.setState({
        redirect: false,
      })
      return(<Redirect to={this.state.redirecting}/>)
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Welcome />} />
          <Route exact path="/register" render={() => <Register />} />
        </div>
      </Router>
    );
  }
}

export default App;
