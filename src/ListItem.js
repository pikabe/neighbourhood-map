import React, { Component } from 'react';

class ListItem extends Component {
  state = {
    currentLocation: null
  }

  updateClickedLocation = () => {
    this.props.chooseLocation(this.props.chosenLocation)
  }

  keyPressFunction = (e) => {
    if (e.key === 'Enter') {
      this.updateClickedLocation()
      if (document.querySelector('.infoBoxContent')) {
        document.querySelector('.infoBoxContent').focus()
      }
    }
  }

  styleLocationListItem = (currentClass) => {
    return 'location-sideBar ' + currentClass
  }

  render() {
    let listClass = this.styleLocationListItem(this.props.chosenClass)
    return(
      <li
        className={listClass}
        tabIndex={this.props.currentTabIndex}
        role="button"
        onClick={this.updateClickedLocation}
        onKeyPress={this.keyPressFunction}
      >
        {this.props.chosenLocation.a}

      </li>
    );
  }

}

export default ListItem
