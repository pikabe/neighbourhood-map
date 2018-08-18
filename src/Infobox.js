import React, { Component } from 'react';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'

class Infobox extends Component {
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
