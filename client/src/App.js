// imports necessary for app to run
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';

// import components for logging in
import Welcome from './components/Welcome';
import Register from './components/Register';
import Login from './components/Login';

// import components for using the app and taking quizzes
import Main from './components/Main';
import QuizOne from './components/QuizOne';
import QuizTwo from './components/QuizTwo';
import QuizThree from './components/QuizThree';
import QuizFour from './components/QuizFour';

class App extends Component {

  constructor(){
    super();
    this.state = {
      redirect: false,
      redirecting: '',
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.logOut = this.logOut.bind(this);
    this.redirectTo = this.redirectTo.bind(this);
    this.plusOne = this.plusOne.bind(this);
  }

  // Thanks and credit to Aury for helping with syntax for plusOne function

  plusOne(e) {
    // console.log("im here");
    e.preventDefault();
    let user_id=this.state.id
    let level=this.state.level
    axios.put(`/auth/${user_id}`, {
      user_id,
      level,
    }).catch(err => console.log(err));
    this.setState({
        level: this.state.user.level,
      });
  }

  handleLoginSubmit(e, username, password) {
    e.preventDefault();
    axios.post('/auth/login', {
      username,
      password,
    }).then(res => {
      // console.log(res.data.user)

      this.setState({
        auth: res.data.auth,
        user: res.data.user,
      });
      this.handleRedirect('/main')
    }).catch(err => console.log(err));
  }

// Thanks and credit to J Silverstein for helping to fix registration error
  handleRegisterSubmit(e, options) {
    e.preventDefault();
    axios.post('/auth/register', {
      options
    })
    .then(res => {
      // console.log("Options:")
      // console.log(options)
      // console.log('Res Data:')
      // console.log(res.data)
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
      })
      window.location.href = '/login'
    })
    .catch(err => console.log(err));
  }

  handleRedirect(path) {
    this.setState({
      redirect: true,
      redirecting: path,
      username: this.state.user.username,
      level: this.state.user.level,
      id: this.state.user.id,
    })
    console.log(`The path is: ` + path)
    console.log(`The user is ` + this.state.user.username)
    console.log(`The user's level is ` + this.state.user.level)
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

  redirectTo() {
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
          <Route exact path="/register" render={() => <Register handleRegisterSubmit={this.handleRegisterSubmit} />} />
          <Route exact path="/login" render={() => <Login handleLoginSubmit={this.handleLoginSubmit} />} />
          <Route exact path="/main" render={() => <Main plusOne={this.plusOne} handleRedirect={this.handleRedirect} username={this.state.username} id={this.state.id} level={this.state.level} />} />
          <Route exact path="/quizone" render={() => <QuizOne handleRedirect={this.handleRedirect} username={this.state.username} />} />
          <Route exact path="/quiztwo" render={() => <QuizTwo handleRedirect={this.handleRedirect} username={this.state.username} />} />
          <Route exact path="/quizthree" render={() => <QuizThree handleRedirect={this.handleRedirect} username={this.state.username} />} />
          <Route exact path="/quizfour" render={() => <QuizFour handleRedirect={this.handleRedirect} username={this.state.username} />} />
          {this.redirectTo()}
        </div>
      </Router>
    );
  }
}

export default App;

