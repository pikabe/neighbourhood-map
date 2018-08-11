import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js'

class SideBar extends Component {
  state={
    query: ''
  }
  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.props.updateCurrentLocations(this.filterLocations(this.props.locationsAll,query))

  }
  filterLocations = (locations,query) => {
    let currentLocations = [];
    if ((locations.constructor === Array) && (query.length>0)){
      locations.map(location =>{
        if (location.a.toUpperCase().includes(query.toUpperCase())){
          currentLocations.push(location)
        }
      }
      )
    }else {
      currentLocations = this.props.locationsAll
    }
    return currentLocations

  }

  render(){
    // console.log(this.filterLocations(this.props.locationsAll,this.state.query))
    const styles ={width:'100%',height:'80%'}
    let sideBar = "sideBar " + this.props.toggle
    return(
      <div className={sideBar} >
      <input className="input"
              type="text"
              placeholder="Search Location"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
            <ul>
      {
            (this.props.locationsList.constructor === Array) ?
                this.props.locationsList.map((location,index) =>

            <ListItem key={index} chooseLocation={this.props.chooseLocation} chosenLocation={location} allLocations={index} />


            ):null
          }
          </ul>
      </div>


      );
  }
}

export default SideBar
