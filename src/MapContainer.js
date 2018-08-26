import React, { Component } from 'react';
import Map from './Map';
const MAPS_API_KEY = 'AIzaSyDNxyvaHgIR_s1Ao8ncRA_-_vIyXi6Bnao'
const MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`
2
class MapContainer extends Component {
  state={
    currentCenter:[],
  }

  render(){

    let address = this.state.address
    console.log(address)
    return(
      <div className='map-container' role="application">
        <Map
          googleMapURL={MAPS_URL}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          locationsCurrent={this.props.locationsCurrent}
          chooseLocation={this.props.chooseLocation}
          chosenLocation = {this.props.chosenLocation}
          address = {address}
          currentCenter= {this.props.currentCenter}
          openSideBar = {this.props.openSideBar}
        />
      </div>
    )
  }
}

export default MapContainer
