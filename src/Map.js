/*global google*/
import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'

const coordinates = { lat: 51.507351 , lng: -0.127758 }
// const google=window.google

const Map = withScriptjs(
  withGoogleMap(
    (props) => (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={coordinates}
      >
      {/**/}
        <InfoBox
          defaultPosition={new google.maps.LatLng(coordinates.lat, coordinates.lng)}
          options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
          <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
              Hello, Taipei!
            </div>
          </div>
        </InfoBox>
        {
           (props.locationsCurrent.constructor === Array) ?

              props.locationsCurrent.map((location,index) =>
              (location === props.chosenLocation)?
              <Marker position={{lat:location.lat,
              lng: location.lng}
            } key={index}
            onClick={()=>props.chooseLocation(location)}
            tabindex={0}
            animation={google.maps.Animation.BOUNCE}
            style={{ color: `yellow` }}

            />:<Marker position={{lat:location.lat,
            lng: location.lng}
          } key={index}
          onClick={()=>props.chooseLocation(location)}
          tabindex={0}
          style={{ color: `yellow` }}

          />

          ):null
        }

      </GoogleMap>
    )
  )
)

export default Map
