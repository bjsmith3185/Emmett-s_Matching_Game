
import React, { Component } from "react";
import Card from "../../components/Card";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Ending from "../../components/Ending";
import easyVersion from "../../easyVersion.json";
import "./Match.css";

class Match extends Component {

  state = {
    gameArray: [],
    score: 0,
    topScore: 0,
    gameOver: false,
    condition: "",

  };

  beginGameReset() {
    this.setState({
      gameArray: easyVersion,
      score: 0,
      gameOver: false,
      condition: "",
    })
  };

  componentDidMount() {
    this.beginGameReset();
  };

  startRound = () => {
    this.setTopScore();

    this.checkForWinner(this.state.gameArray)
  };

  checkForWinner = (array) => {
    let numberArray = [];

    for (var i in array) {
      if (!array[i].clicked) {
        numberArray.push("false")
      }
    };

    if (numberArray.length === 0) {
      this.endGame("winner");
    } else {
      var shuffledArray = this.shuffle(this.state.gameArray)
      this.setState({
        gameArray: shuffledArray
      })
    }

  };


  shuffle = (array) => {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  clickImage = name => {
    console.log(` this is the name: ${name}.`);

    var newGameArray = {};
    newGameArray = this.state.gameArray;
    var hasBeenClicked = false;

    for (var k = 0; k < newGameArray.length; k++) {
      if (newGameArray[k].name === name) {
        if (newGameArray[k].clicked === true) {
          hasBeenClicked = true;
        }
      }
    };

    if (hasBeenClicked) {
      this.endGame("loser")
    } else {
      for (var i = 0; i < newGameArray.length; i++) {
        if (newGameArray[i].name === name) {
          newGameArray[i].clicked = true;
          break;
        }
      }

      this.setState({
        gameArray: newGameArray,
        score: this.state.score + 1,
        topScore: this.state.topScore + 1
      })

      this.startRound();
    }
  };

  // setTopScore = () => {

  //   if (this.state.topScore === this.state.gameArray.length) {
  //     this.setState({
  //       topScore: this.state.gameArray.length
  //     })
  //   }
  // };

  endGame = (status) => {
    let condition;
    if (status === "loser") {
      condition = "loser"
    } else {
      condition = "winner"
    }

    this.setState({
      gameOver: true,
      condition: condition
    })
  };

  restart = () => {
    let resetGameArray = this.state.gameArray.map(item => {
      return item.clicked = false;
    });

    this.setState({
      gameArray: resetGameArray
    })

    this.beginGameReset();
  };


  // seeResults = () => {
  //   console.log("this is the gamearray")
  //   console.log(this.state.gameArray)
  //   console.log(`this is the score ${this.state.score}`)
  // };



  render = () => {
    return (
      <Wrapper>

        {/* <Title score={this.state.score} topScore={this.state.topScore} >Click an image but dont click it twice!!!</Title> */}

        {this.state.gameOver ? (
          <div>
            <button>Play again?</button>
          </div>

          // <Ending score={this.state.score} condition={this.state.condition} restart={this.restart} />

        ) : (

            this.state.gameArray.map(item => (
              <Card
                clickImage={this.clickImage}
                key={item.name}
                image={item.image}
              />
            ))
          )}

      </Wrapper>
    );
  };
};

export default Match;

