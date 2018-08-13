import React, { Component } from 'react';

class ListItem extends Component {
  state = {
    currentLocation: null

  }
  updateClickedLocation = () => {
    this.props.chooseLocation(this.props.chosenLocation)
  }

  render(){


    return(

      <li className="location-sideBar" tabindex={0}
      onClick={this.updateClickedLocation}
      > {this.props.chosenLocation.a} </li>


    );
  }


}

export default ListItem
