import React, { Component } from 'react';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'
const FOURSQUARE_CLIENT_ID = 'TUPY2JGNHMABCSHZVXG1CJMSEKO0XUOXDEPTTMVMSOSUCZBJ'
const FOURSQUARE_CLIENT_SECRET ='CULNR0XDCCUO4FRHXB2CD54A33CVVLNXMDBA4ZHULJJFKFZ2'
//
// ''
class Infobox extends Component {
  state = {
    address:[]
  }
  componentDidMount() {
    this.fetchAddress()
  }

  fetchAddress= () =>{
    return fetch(`https://api.foursquare.com/v2/venues/search?ll=${this.props.chosenLocation.lat},${this.props.chosenLocation.lng}&limit=1&client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=20180814`)
                .then(response => response.json())
                .then(data => data.response.venues[0].location.formattedAddress)
                .then(data =>this.setState({address:data}))

                // .then(this.formattedAddress)
                .catch(data => this.setState({address:['unavailable']}))
                // .catch(error => {alert('quota exceeded');document.querySelector('.infoBoxContent').focus()})
}






  handleFetchError = (error) => {
    alert('Location Address unavailable. This could be due to,\n 1)Incorrect client_id or client_secret credential for foursquare API.\n 2)Offline/Slow internet connection\n3)The quota for the location requests have been exceeded.  ');document.querySelector('.infoBoxContent').focus()
    this.setState({address:['Address unavailable']})
  }

  getData = (data) => {
  console.log(data)
  console.log(typeof data)
  }

  keyPressFunction = (e) => {
    if ((e.key === 'Enter') || (e.key === 'tab')) {
      if (document.querySelector('.chosen')) {
        document.querySelector('.chosen').focus()
      }
    }
  }
  focusInfoBox() {
  this.box.focus();
  }
  render(){
    console.log(this.state.address)
    return(
      <InfoBox
        defaultPosition={new this.props.google.maps.LatLng({lat:this.props.chosenLocation.lat, lng:this.props.chosenLocation.lng})}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div
          style={{ backgroundColor: `#FF00FF`,
          opacity: 0.75, padding: `12px` }}
          className="infoBoxContent" tabIndex={0}
          aria-label="infobox"
          onKeyPress={this.keyPressFunction}
          ref={(div) => this.InfoBox = div}
          onClick={() => {this.InfoBox.focus()}}
        >
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            <ul>



            </ul>
          </div>
        </div>
      </InfoBox>
    )
  }
}

export default Infobox
