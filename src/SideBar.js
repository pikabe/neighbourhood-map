import React, { Component } from 'react';
import './App.css';


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
        if (location.a.includes(query)){
          currentLocations.push(location)
        }
      }
      )
    }else {
      currentLocations = this.props.locationsAll
    }
    return currentLocations

  }


  /*BooksAPI.search(query).then((searchResults) => {
    if (query.length>0) {//checks if searchResults has stored any books
      this.setState({
        searchResults
      })}
     else {
      this.setState({
        searchResults: []
      })
    }
  })*/

  render(){
    console.log(this.filterLocations(this.props.locationsAll,this.state.query))
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
                this.props.locationsList.map(location =>
            <li className="location-sideBar"
            key={location.a}
          

            > {location.a} </li>
            ):null
          }
          </ul>
        {/*<div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>*/}

      </div>


      );
  }
}

export default SideBar
