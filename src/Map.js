/*global google*/
import React, { Component,Fragment } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'
import styles from "./App.css"
import Infobox from "./Infobox.js"


const coordinates = { lat: 51.507351 , lng: -0.169758 }

// const google=window.google

const Map = withScriptjs(
  withGoogleMap(
    (props) => (
      <div className={styles.MapContainer} role="application">
        <GoogleMap
          defaultZoom={12}
          defaultCenter={coordinates}
          options={{
            fullscreenControl: true ,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_RIGHT
              },
            fullscreenControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
              }
             }}
        >
          {
             (props.locationsCurrent.constructor === Array) ?

                props.locationsCurrent.map((location,index) =>
                  (location === props.chosenLocation)?
                    <Fragment key={index}>
                      <Marker
                        position={{
                        lat:location.lat,
                        lng: location.lng
                        }}
                        key={index}
                        onClick={()=>props.chooseLocation(location)}
                        tabindex={0}
                        animation={google.maps.Animation.BOUNCE}
                      />

                    <Infobox chosenLocation={location} google={google} />
                   </Fragment>
                :
                <Marker
                  position={{
                    lat:location.lat,
                    lng: location.lng
                  }}
                  key={index}
                  onClick={()=>props.chooseLocation(location)}
                  tabindex={0}
                  style={{ color: `yellow` }}

                  />
            ):null
          }

        </GoogleMap>
      </div>
    )
  )
)

export default Map
