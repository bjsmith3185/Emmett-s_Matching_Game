import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import "./Home.css";
import gamesArray from "../../gamesArray.json";
import GameCard from "../../components/GameCard";


class Home extends Component {

  state = {
    games: [],
  };


  componentDidMount() {
    localStorage.clear();
    // console.log(gamesArray)
    this.setState({
      games: gamesArray
    })
  };

  playGame = (selected) => {
    // console.log(selected)
    localStorage.setItem("gameSelected", selected);
    this.redirectMatch();
  }


  redirectMatch = () => {
    this.props.history.push({ pathname: "/match" });
  }


  render() {
    return (
      <Wrapper>
        <div>
          {/* <Nav /> */}
          <br />
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="home-header">
                <div className="home-title text-center">Lets Play Matching Games!</div>
              </div>
            </div>
          </div>


          <div className="row home-select-area">

            <div className="col-lg-12"></div>

            {this.state.games.map(game => (
              <GameCard
                name={game.name}
                image={game.src}
                key={game.id}
                playGame={this.playGame}
              />

            ))}

          </div>

        </div>
      </Wrapper>
    );
  };
}


export default Home;
