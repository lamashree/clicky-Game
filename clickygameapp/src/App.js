import React, { Component } from "react";
import Navbar from "./Components/Navbar"
import PictureCard from "./Components/PictureCard"
import Wraper from "./Components/Wrapper"
import Images from "./Images.json";
import "./index.css";
// import NavMessage from "./Components/NavMessage"


class App extends Component {
  state = {
    Images,
    score: 0,
    topScore: 0,
    message: "",
    animating: false,
    clickedpaintings: []
  }
  componentDidMount() {
    this.setState({ Images: this.shuffleArray(this.state.Images) });
  }


//  createGreeting = ({score, topScore}, prevState) => {
//   const newState = { animating: true };

//   if (score === 0 && topScore === 0) {
//     newState.message = "";
//   } else if (score === 0 && topScore > 0) {
//     newState.message = "incorrect";
//   } else {
//     newState.message = "correct";
//   }
//   if (score !== this.props.score || this.state.message !== newState.message) {
//     this.setState(newState);
//   }
// }

// renderMessage = () => {
//   switch (this.state.message) {
//   case "correct":
//     return "You guessed correctly!";
//   case "incorrect":
//     return "You guessed incorrectly!";
//   default:
//     return "Click an image to begin!";
//   }
// };


  
  handleCorrectGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
      Images: this.shuffleArray(newData),
      score: newScore,
      topScore: newTopScore
    });
  };
  handleIncorrectGuess = Images => {
    this.setState({
      Images: this.resetData(Images),
      score: 0
    });
  };


  resetData = Images => {
    const resetData = Images.map(image => ({ ...image, clicked: false }));
    return this.shuffleArray(resetData);
  };

  shuffleArray = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  handleClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.Images.map(image => {
      const newItem = { ...image };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
      
  };



  render() {
    return (
      <>
      
        <Navbar score={this.state.score} navMessage = {this.renderMessage}topScore={this.state.topScore}
        // {this.renderMessage}
        />
                {this.renderMessage}

        <div class="row">
          <div class="col md8">
            <Wraper>
              {this.state.Images.map(image => (
                <PictureCard
                  key={image.id}
                  id={image.id}
                  shake={!this.state.score && this.state.topScore}
                  handleClick={this.handleClick}
                  image={image.image}

                />
              ))}

            </Wraper>
          </div>
        </div>
      </>



    )
  }
}
export default App;




