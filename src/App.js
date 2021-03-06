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
    locationsAll:[{title:'Big Ben (Elizabeth Tower)',lat:51.50062,lng:-0.124578 },{title:'Lord\'s Cricket Ground (MCC)',lat:51.529411544586594,lng:-0.17269134521484375},{title:'Royal Albert Hall',lat:51.50112589677719,lng:-0.177406419278454},{title:'National Gallery',lat:51.50887601013219,lng:-0.1284778118133545},{title:'Primrose Hill', lat:51.53898536886534,lng:-0.1600673353931939}],
    locationsCurrent:[{title:'Big Ben (Elizabeth Tower)',lat:51.50062,lng:-0.124578 },{title:'Lord\'s Cricket Ground (MCC)',lat:51.529411544586594,lng:-0.17269134521484375},{title:'Royal Albert Hall',lat:51.50112589677719,lng:-0.177406419278454},{title:'National Gallery',lat:51.50887601013219,lng:-0.1284778118133545},{title:'Primrose Hill', lat:51.53898536886534,lng:-0.1600673353931939}],
    sideBarOpen: false,
    defaultCenter:{ lat: 51.507351 , lng: -0.169758 },
    currentCenter:{ lat: 51.507351 , lng: -0.169758 },
    chosenLocation:null // note to self, chosen location would be an object.
  }

  handleTogglesideBar = () =>{
  this.setState((prevState) =>{
    return{sideBarOpen: !prevState.sideBarOpen}
    });
  };

checkIsOpen = (state) =>{
  let navClassNames
  if (state){
    navClassNames=  "open";

  }else {
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
    currentCenter:{lat:location.lat,lng:location.lng},
    chosenLocation: location

    })
  } else {
  this.setState({
    currentCenter:{lat:this.state.defaultCenter.lat,lng:this.state.defaultCenter.lng},
    chosenLocation: null,

      })

    }
  }
  openSideBar = () => {
    this.setState({
      sideBarOpen:true
    })
  }

  render() {
    let navClasses = this.checkIsOpen(this.state.sideBarOpen);
    //adds the class to determine styling of sideBar depending on if it's closed or open
    return (
      <div className="App" style={{height:'100%',width:'100%'}}>
        <header className="App-header">
          <h1 className="App-title">London</h1>
          <SideBarToggle handleTogglesideBar={this.handleTogglesideBar}/> {/*button allows the sideBar to open or close*/}
        </header>


        <SideBar toggle={navClasses}
          locationsList={this.state.locationsCurrent} //locations currently applicable to user
          locationsAll= {this.state.locationsAll} //default locations if no user input
          updateCurrentLocations = {this.updateCurrentLocations}
          chooseLocation = {this.chooseLocation}
          chosenLocation = {this.state.chosenLocation}
          sideBarOpen = {this.state.sideBarOpen}
          openSideBar = {this.openSideBar}
        />


        <MapContainer
          currentCenter = {this.state.currentCenter}
          locationsCurrent={this.state.locationsCurrent}
          chooseLocation={this.chooseLocation}
          chosenLocation = {this.state.chosenLocation}
          openSideBar = {this.openSideBar}
          />

        </div>
    );
  }
}

export default App;
