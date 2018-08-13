/*global google*/
import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer.js'

import SideBarToggle from './SideBarToggle'
import SideBar from './SideBar.js'
import Map from './Map';
const MAPS_API_KEY = 'AIzaSyDNxyvaHgIR_s1Ao8ncRA_-_vIyXi6Bnao'
const MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`

class App extends Component {
  state={
    locationsAll:[{a:'hello my',lat:51.507268,lng:-0.16573 },{a:'name is',lat:51.501757,lng:-0.203186},{a:'favourite color',lat:51.536561,lng:-0.038972},{a:'hi bye',lat:51.532692,lng:-0.141995},{a:'locations', lat:51.479108,lng:-0.156498}],
    locationsCurrent:[{a:'hello my',lat:51.507268,lng:-0.16573 },{a:'name is',lat:51.501757,lng:-0.203186},{a:'favourite color',lat:51.536561,lng:-0.038972},{a:'hi bye',lat:51.532692,lng:-0.141995},{a:'locations', lat:51.479108,lng:-0.156498}],
    sideBarOpen: false,
    chosenLocation:null // note to self, chosen location would be an object.
    // previousSideBarState:true

  }
  handleTogglesideBar =() =>{
  this.setState((prevState) =>{
    return{sideBarOpen: !prevState.sideBarOpen}
  });
};

checkIsOpen = (state) =>{
  let navClassNames
  if (state){
    navClassNames=  "open";

  }else {
    // if (window.innerwidth )
    navClassNames= "close";
  }
  return navClassNames
}
updateCurrentLocations = (locationsCurrent) =>{
  this.setState({
    locationsCurrent
  })
}
chooseLocation = (location) => {
  if (location !== this.state.chosenLocation) {
    this.setState({
      chosenLocation:location
    })
  }else {
    this.setState({
      chosenLocation:null
    })

    }

  }

  render() {
      let navClasses = this.checkIsOpen(this.state.sideBarOpen);
    return (
      <div className="App" style={{height:'100%',width:'100%'}}>
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Welcome to React</h1>
            <nav className="nav"><SideBarToggle handleTogglesideBar={this.handleTogglesideBar}/></nav>


          </header>
          <SideBar toggle={navClasses}
          locationsList={this.state.locationsCurrent}
          locationsAll= {this.state.locationsAll}
          updateCurrentLocations = {this.updateCurrentLocations}
          chooseLocation = {this.chooseLocation}
          chosenLocation = {this.state.chosenLocation}
          />
          {/**/}

          {/*<Map
          googleMapURL={MAPS_URL}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          locationsCurrent={this.state.locationsCurrent}
          chooseLocation={this.chooseLocation}
          chosenLocation = {this.state.chosenLocation}
          />*/}
          <MapContainer
          locationsCurrent={this.state.locationsCurrent}
          chooseLocation={this.chooseLocation}
          chosenLocation = {this.state.chosenLocation}
           />


        </div>
    );
  }
}

export default App;
