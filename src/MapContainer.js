import React, { Component } from 'react';
import Map from './Map';
const MAPS_API_KEY = 'AIzaSyDNxyvaHgIR_s1Ao8ncRA_-_vIyXi6Bnao'
const MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`
const FOURSQUARE_CLIENT_ID = 'TUPY2JGNHMABCSHZVXG1CJMSEKO0XUOXDEPTTMVMSOSUCZBJ'
const FOURSQUARE_CLIENT_SECRET ='CULNR0XDCCUO4FRHXB2CD54A33CVVLNXMDBA4ZHULJJFKFZ2'
//
// ''
class MapContainer extends Component {
  state={
    address:[],
  }

  handleFetchError = (error) => {
    alert('Location Address unavailable. This could be due to,\n 1)Incorrect client_id or client_secret credential for foursquare API.\n 2)Offline/Slow internet connection\n3)The quota for the location requests have been exceeded.  ');document.querySelector('.infoBoxContent').focus()
    return [['Address unavailable']]
  }

  getData = (data) => {
    let arrayAddress = [];
    if (data) {
      arrayAddress.push(data)
    } else {
      arrayAddress.push(['Address unavailable'])
    }
    return arrayAddress
  }

  fetchAddress = () => {
    if ((this.props.chosenLocation)){
      return fetch(`https://api.foursquare.com/v2/venues/search?ll=${this.props.chosenLocation.lat},${this.props.chosenLocation.lng}&limit=1&client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=20180814`)
                    .catch(error =>  {alert('quota exceeded');document.querySelector('.infoBoxContent').focus()})
                    .then(response => response.json())
                    .then(data => data.response.venues[0].location.formattedAddress)
                    // .then(data => data)
                    // .then(this.formattedAddress)
                    .catch(this.handleFetchError)
                    // .catch(error => {alert('quota exceeded');document.querySelector('.infoBoxContent').focus()})
    }else {
      return ['Address unavailable']
    }
  }


  render(){
    let address = this.fetchAddress()[0];
    // let address = this.state.address
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
        />
      </div>
    )
  }
}

export default MapContainer
