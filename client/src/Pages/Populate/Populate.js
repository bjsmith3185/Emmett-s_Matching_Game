import React from 'react';
import API from '../../utils/API';


export default class Populate extends React.Component {
  

  populateAdvertisements = () => {
    API.populateAdvertisements()
      .then(res => {
        console.log("populate advertisements")
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  
  redirectStartPage = () => {
    this.props.history.push({pathname: "/" });
  };


  render() {
    return (

      <div >
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.populateAdvertisements}>Populate Ads</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.redirectStartPage}>Back to app</button>
      </div>

    )
  }
}
