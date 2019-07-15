import React from 'react';
import logo from 'assets/logo.png';
import './App.css';
import FilterBar from 'components/FilterBar/FilterBar'

function App () {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="nectar"/>
      <FilterBar/>
    </div>
  );
}

export default App;
