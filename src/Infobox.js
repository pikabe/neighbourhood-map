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
    if (this.props.chooseLocation){
      document.querySelector('.infoBoxContent').focus()
    }

  }

  fetchAddress= () =>{
    return fetch(`https://api.foursquare.com/v2/venues/search?ll=${this.props.chosenLocation.lat},${this.props.chosenLocation.lng}&limit=1&client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=20180814`)
                .then(response => response.json())
                .then(data => data.response.venues[0].location.formattedAddress)
                .then(data =>this.setState({address:data}))

                // .then(this.formattedAddress)
                .catch(data => this.setState({address:['Address unavailable']}))
                // .catch(error => {alert('quota exceeded');document.querySelector('.infoBoxContent').focus()})
}






  handleFetchError = (error) => {
    alert('Location Address unavailable. This could be due to,\n 1)Incorrect client_id or client_secret credential for foursquare API.\n 2)Offline/Slow internet connection\n3)The quota for the location requests have been exceeded.  ');document.querySelector('.infoBoxContent').focus()
    this.setState({address:['Address unavailable']})
  }



  keyPressFunction = (e) => {
    if ((e.key === 'Enter') || (e.key === 'tab')) {
      if (document.querySelector('.chosen')) {
        this.props.openSideBar()
        document.querySelector('.chosen').focus()
      }
    }
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
          opacity: 0.75, padding: `12px`,width:`auto` }}

        >
          <div style={{ fontSize: `16px`, fontColor: `#08233B`,width:`auto` }}>
            <ul
            className="infoBoxContent"
            tabIndex={0}
            aria-label="infobox"
            onKeyPress={this.keyPressFunction}
            ref={(ul) => { this.infoBoxContent = ul }}

            >
             <li className="title"> {this.props.chosenLocation.title} </li>
            {
              (this.state.address === ['Address unavailable'])?
              <React.Fragment>

              <li> Address unavailable </li>
              </React.Fragment>
              :

              this.state.address.map((line,index) =>
              <li key={index}> {line} </li>

              )
            }

            </ul>
          </div>
        </div>
      </InfoBox>
    )
  }
}

export default Infobox
