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
import AboutApp from './components/AboutApp';
import QuizOne from './components/QuizOne';
import QuizTwo from './components/QuizTwo';
import QuizThree from './components/QuizThree';

// app.js used to route through app and maintain auth while doing so
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
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/main" render={() => <Main />} />
          <Route exact path="/about" render={() => <AboutApp />} />
          <Route exact path="/quizone" render={() => <QuizOne />} />
          <Route exact path="/quiztwo" render={() => <QuizTwo />} />
          <Route exact path="/quizthree" render={() => <QuizThree />} />
        </div>
      </Router>
    );
  }
}

export default App;
