
import React, { Component } from "react";
import Card from "../../components/Card";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Ending from "../../components/Ending";
import easyVersion from "../../easyVersion.json";
import "./Match.css";
import redbox from "../../images/Red_Square.png";

class Match extends Component {

  state = {
    gameArray: [],

    gameOver: false,
    condition: "",
    firstPickName: "",
    firstPickId: "",
    secondPick: "",
    // checkForWinner: false,

  };

  componentDidMount() {
    this.resetGame(easyVersion);
    console.log(easyVersion)
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

  clearState = () => {
    this.setState({
      gameArray: "",
      gameOver: false,
      condition: "",
      firstPickName: "",
      firstPickId: "",
      secondPick: "",
      // checkForWinner: false,
    })
  }

  resetGame(array) {
    this.clearState();

    let shuffledArray = this.shuffle(array);

    this.setState({
      gameArray: shuffledArray,
    })
  };

  checkForGameOver = () => {
    let count = 0;

    for (var i = 0; i < this.state.gameArray.length; i++) {
      if (this.state.gameArray[i].matched === true) {
        count++
      }
    }
    if (count === this.state.gameArray.length) {
      console.log("game over")
      console.log(`number of true:${count}, length of array: ${this.state.gameArray.length}`)
      this.setState({
        gameOver: true,
      })
      // this.resetGame();
    }
  };

  changeImage = (first, second) => {
    console.log("changing image")
    console.log(`first image name ${first}, second image name ${second}`)

    // change the image value in this.state.gameArray to a solid color;
    let tempArray = [];
    let tempObj = {};

    for (var i = 0; i < this.state.gameArray.length; i++) {
      if (first === this.state.gameArray[i].name) {
        tempObj = this.state.gameArray[i];
        console.log("this is the temp obj that matches")
        console.log(tempObj)

        tempObj.image = redbox;
        console.log("new obj with redbox")
        console.log(tempObj)
        tempObj.matched = true;

        tempArray.push(tempObj);
      } else {
        tempArray.push(this.state.gameArray[i])
      }

      this.setState({
        gameArray: tempArray,
        // firstPick: "",
        firstPickName: "",
        firstPickId: ""

      })
    }
    this.checkForGameOver();

  };

  clickImage = (name, id, matched) => {
    console.log(` this is the name: ${name}.`);
    console.log(` this is the id: ${id}.`);
    console.log(`has been matched status: ${matched}`)
    console.log("this is firstPickName value: " + this.state.firstPickName)

    if (matched) {
      console.log("this one has already been matched")
      return;
    }

    if (this.state.firstPickName) {
      console.log(`first id: ${this.state.firstPickId} second id: ${id}`)
      if (this.state.firstPickName === name) {
        if (this.state.firstPickId === id) {
          // doesnot match
          console.log(`${this.state.firstPickName} does not match ${name}`)
          this.setState({
            firstPickName: "",
            firstPickId: "",
          })
        } else {
          // matches!11
          console.log(`${this.state.firstPickName} is the same as ${name}`)
          // this.setState({
          //   firstPick: "",
          // })
          this.changeImage(this.state.firstPickName, name);

        }



      } else {
        // doesnot match
        console.log(`${this.state.firstPickName} does not match ${name}`)
        this.setState({
          firstPickName: "",
          firstPickId: "",

        })

      }

    } else {
      this.setState({
        firstPickName: name,
        firstPickId: id,
      })
    }

  };

  playAgain = (array) => {
    this.resetGame(array)
  }

  redirectHomePage = () => {
    this.props.history.push({ pathname: "/" });
  }


  render = () => {
    return (
      <Wrapper>

        {/* <Title score={this.state.score} topScore={this.state.topScore} >Click an image but dont click it twice!!!</Title> */}

        {this.state.gameOver ? (
          <Ending
          homePage={this.redirectHomePage}
          />
         

          // <Ending score={this.state.score} condition={this.state.condition} restart={this.restart} />

        ) : (

            this.state.gameArray.map(item => (
              <Card
                clickImage={this.clickImage}
                key={item.id}
                image={item.image}
                name={item.name}
                matched={item.matched}
                id={item.id}
              />
            ))
          )}

      </Wrapper>
    );
  };
};

export default Match;

