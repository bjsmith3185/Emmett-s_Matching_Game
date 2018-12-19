import React, { Component } from "react";
import Nav from "../../components/Nav";
import "./Home.css";


class Home extends Component {




  redirectMatch = () => {
    this.props.history.push({ pathname: "/match" });
  }
  

  render() {
    return (

      <div>
        <Nav />
        <br />
        <div className="admin-header">
          <h1 className="home-h1">AD-On.</h1>
        </div>

        <div className="row">

          <div className="col-2"></div>
          <div className="col-6">

            <button onClick={this.redirectMatch}>Play</button>

          </div>
        </div>

      </div>

    );
  };
}


export default Home;
