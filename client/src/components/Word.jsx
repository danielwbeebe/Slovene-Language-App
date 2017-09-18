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
    var randNum = Math.floor(Math.random() * 25);

    if (randNum===0) {
      this.setState({
        word: "'naslov' means address",
      })
    }
    if (randNum===1) {
      this.setState({
        word: "'kopalnica' means bathroom",
      })
    }
    if (randNum===2) {
      this.setState({
        word: "'kavarna' means café",
      })
    }
    if (randNum===3) {
      this.setState({
        word: "'temen' means dark",
      })
    }
    if (randNum===4) {
      this.setState({
        word: "'prazen' means empty",
      })
    }
    if (randNum===5) {
      this.setState({
        word: "'obraz' means face",
      })
    }
    if (randNum===6) {
      this.setState({
        word: "'trava' means grass",
      })
    }
    if (randNum===7) {
      this.setState({
        word: "'roka' means hand",
      })
    }
    if (randNum===8) {
      this.setState({
        word: "'zanimiv' means interesting",
      })
    }
    if (randNum===9) {
      this.setState({
        word: "'marmelada' means jam",
      })
    }
    if (randNum===10) {
      this.setState({
        word: "'koleno' means knee",
      })
    }
    if (randNum===11) {
      this.setState({
        word: "'pismo' means letter",
      })
    }
    if (randNum===12) {
      this.setState({
        word: "'denar' means money",
      })
    }
    if (randNum===13) {
      this.setState({
        word: "'nov' means new",
      })
    }
    if (randNum===14) {
      this.setState({
        word: "'pisarna' means office",
      })
    }
    if (randNum===15) {
      this.setState({
        word: "'zabava' means party",
      })
    }
    if (randNum===16) {
      this.setState({
        word: "'hiter' means quick",
      })
    }
    if (randNum===17) {
      this.setState({
        word: "'reka' means river",
      })
    }
    if (randNum===18) {
      this.setState({
        word: "'sladkor' means sugar",
      })
    }
    if (randNum===19) {
      this.setState({
        word: "'vlak' means train",
      })
    }
    if (randNum===20) {
      this.setState({
        word: "'univerza' means university",
      })
    }
    if (randNum===21) {
      this.setState({
        word: "'zelo' means very",
      })
    }
    if (randNum===22) {
      this.setState({
        word: "'vetroven' means windy",
      })
    }
    if (randNum===23) {
      this.setState({
        word: "'letos' means this year",
      })
    }
    if (randNum===24) {
      this.setState({
        word: "'roka' means arm",
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
