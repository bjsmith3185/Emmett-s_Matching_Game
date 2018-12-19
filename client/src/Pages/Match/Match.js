
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
    firstPick: "",
    secondPick: "",
    checkForWinner: false,

  };

  componentDidMount() {
    this.beginGameReset(easyVersion);
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

  beginGameReset(array) {
    let shuffledArray = this.shuffle(array);


    this.setState({
      gameArray: shuffledArray,

      gameOver: false,
      condition: "",
      firstPick: "",
      secondPick: "",
      checkForWinner: false,

    })
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

        tempArray.push(tempObj);
      } else {
        tempArray.push(this.state.gameArray[i])
      }

      this.setState({
        gameArray: tempArray,
        firstPick: "",
      })
    }

  };

  clickImage = (name) => {
    console.log(` this is the name: ${name}.`);

    if (this.state.firstPick) {
      if (this.state.firstPick === name) {
        // matches!11
        console.log(`${this.state.firstPick} is the same as ${name}`)
        // this.setState({
        //   firstPick: "",
        // })
        this.changeImage(this.state.firstPick, name);

      } else {
        // doesnot match
        console.log(`${this.state.firstPick} does not match ${name}`)
        this.setState({
          firstPick: "",
        })

      }

    } else {
      this.setState({
        firstPick: name,
      })
    }

  };


  endGame = (status) => {

  };

  restart = () => {

  };




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
                key={item.id}
                image={item.image}
                name={item.name}
              />
            ))
          )}

      </Wrapper>
    );
  };
};

export default Match;

