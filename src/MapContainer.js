import React, { Component } from 'react';
import Map from './Map';
const MAPS_API_KEY = 'AIzaSyDNxyvaHgIR_s1Ao8ncRA_-_vIyXi6Bnao'
const MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`

class MapContainer extends Component {
  render(){
    return(
      <Map
      googleMapURL={MAPS_URL}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      locationsCurrent={this.props.locationsCurrent}
      chooseLocation={this.props.chooseLocation}
      chosenLocation = {this.props.chosenLocation}
      />
    )
  }


}

export default MapContainer
