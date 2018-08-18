import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js'

class SideBar extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.props.updateCurrentLocations(this.filterLocations(this.props.locationsAll, query))

  }
  filterLocations = (locations, query) => {
    let currentLocations = [];
    if ((locations.constructor === Array) && (query.length > 0)) {
      locations.map(location => {
        if (location.a.toUpperCase().includes(query.toUpperCase())) {
          currentLocations.push(location)
        }
      })
    } else {
      currentLocations = this.props.locationsAll
    }
    return currentLocations
  }

  checkWindowWidth = () => {
    if ((window.innerWidth >= 850) && (this.props.sideBarOpen === false)) { //checks window size to see if the sidebar should be open
      this.props.openSideBar();

    }
  }

  tabIndex = (bool) => {
    if (bool) {
      return 0
    } else {
      return -1
    }
  }

  componentDidMount() {
    this.checkWindowWidth();
    window.addEventListener("resize", this.checkWindowWidth.bind(this));
  }

  render(){
    // console.log(this.filterLocations(this.props.locationsAll,this.state.query))
    const styles ={width:'100%',height:'80%'}
    let sideBar = "sideBar " + this.props.toggle;
    let tabIndex = this.tabIndex(this.props.openSideBar);

    return(
      <nav className={sideBar} >
        <input className="input"
          type="text"
          placeholder="Search Location"
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)}
          tabIndex={tabIndex}
          type="text"
          aria-label="Search location"
        />

        <ul role="menubar" aria-label="Menu-choose location" className="menubar">
          {
            (this.props.locationsList.constructor === Array) ?
                this.props.locationsList.map((location,index) =>
                (location === this.props.chosenLocation)?
                <ListItem key={index} currentTabIndex={tabIndex} chosenClass='chosen' chooseLocation={this.props.chooseLocation} chosenLocation={location} allLocations={index} />
                :
                <ListItem key={index} currentTabIndex={tabIndex} chosenClass='notChosen'  chooseLocation={this.props.chooseLocation} chosenLocation={location} allLocations={index} />
            ):null
          }
          </ul>
      </nav>
      );
  }
}

export default SideBar
