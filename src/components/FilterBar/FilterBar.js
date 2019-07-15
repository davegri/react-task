import React from 'react';
import './FilterBar.css';
import filters from 'filters.json'
import Filter from './Filter'

class FilterBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: null
    };
  }

  handleClick = filter => this.setState({ selectedFilter: filter })

  render(){
    return (
      <div className="FilterBar">
      {Object.keys(filters).map(filter =>
        <Filter
          showOptions={this.state.selectedFilter === filter}
          onClick={this.handleClick}
          name={filter}
          options={filters[filter]}
          key={filter}
        />
      )}
      </div>
    );
  }

}

export default FilterBar;
