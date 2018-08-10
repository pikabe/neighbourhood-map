import React, { Component } from 'react';

class SideBarToggle extends Component {

  render() {
    return(
      <button className="toggle-SideBar" onClick={this.props.handleTogglesideBar}>
        <div className="toggle-line"/>
        <div className="toggle-line"/>
        <div className="toggle-line"/>
      </button>

    )

  }
}

export default SideBarToggle
