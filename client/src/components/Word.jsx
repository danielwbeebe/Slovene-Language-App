import React, {Component} from 'react';

class Word extends Component {
  constructor(){
    super();
      this.state = {
        word: " ",
      }
    }

  componentDidMount() {
    this.randomOrder();
  }

  randomOrder() {
    var randNum = Math.floor(Math.random() * 1);

    if (randNum===0) {
      this.setState({
        word: "'naslov' means address",
      })
    }
  }

  render(){
    return (
      <div className="random-word">
        <h3 className="random-word-intro">Random Word to Learn:</h3>
        <h4>{this.state.word}</h4>
      </div>
    )
  }
}

export default Word;
