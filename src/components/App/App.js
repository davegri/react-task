import React from 'react';
import logo from 'assets/logo.png';
import './App.css';
import FilteringContainer from 'components/Filtering/FilteringContainer'

function App () {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="nectar"/>
      <FilteringContainer/>
    </div>
  );
}

export default App;
