import React, { Component } from 'react';
import Map from './Map';
const MAPS_API_KEY = 'AIzaSyDNxyvaHgIR_s1Ao8ncRA_-_vIyXi6Bnao'
const MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`
const FOURSQUARE_CLIENT_ID = 'TUPY2JGNHMABCSHZVXG1CJMSEKO0XUOXDEPTTMVMSOSUCZBJ'
const FOURSQUARE_CLIENT_SECRET = 'CULNR0XDCCUO4FRHXB2CD54A33CVVLNXMDBA4ZHULJJFKFZ2'
class MapContainer extends Component {
  state={
    address:[]
  }



  fetchAddress = () => {
    if (this.props.chosenLocation){
      return fetch(`https://api.foursquare.com/v2/venues/search?ll=${this.props.chosenLocation.lat},${this.props.chosenLocation.lng}&limit=3&client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=20180814`)
                    .then(response => response.json())
                    .then(data => data.response.venues[0].location.formattedAddress)
                    .then(data => this.setState({address:data}))


                    // .then(this.formattedAddress)
                    .catch(error => console.log(error))
    }else {
      return <li>Address unavailable</li>
    }

  }





  render(){
    let address = this.fetchAddress();
    console.log(address)
    return(
      <div className='map-container'>
      <Map
      googleMapURL={MAPS_URL}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      locationsCurrent={this.props.locationsCurrent}
      chooseLocation={this.props.chooseLocation}
      chosenLocation = {this.props.chosenLocation}
      address = {this.state.address}

      />
      </div>
    )
  }


}

export default MapContainer
