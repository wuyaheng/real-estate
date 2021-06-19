import React, { Component } from 'react';
import MapBox from "./components/MapBox/index"
import './App.css';
import propertiesData from "./data.json";


class App extends Component {
  state = {
    properties: []
  }


componentDidMount() {
      this.fetchProperties()
    }

  fetchProperties = () => {
    this.setState({
      properties: propertiesData
    });
} 



  render() {
    return (
      <>

        <nav className="nav-wrapper">
          <p className="center projectTitle p-0 text-white">NY Real Estate Properties</p>
        </nav>
  
   
      <div className="container-fluid">

      <div className="row mt-2 mb-0"> 
          <div className="col-md-12 mb-0 pb-0">
              <div className="card mb-0 pb-0">
                <MapBox results={this.state.properties} /> 
              </div>
            </div>
        </div>
        <div className="row justify-content-end mt-0 pt-0">
          <p className="mr-4">Data Source: <a target="_blank" rel="noopener noreferrer" aria-label="Realty Mole Property API" href="https://rapidapi.com/realtymole/api/realty-mole-property-api/details">Realty Mole Property API </a></p>
        </div>

       </div> 
      </>
    )
  }
}

export default App;