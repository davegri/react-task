import React from 'react';
import filters from 'filters.json'
import FilterMenu from './FilterMenu'
import FiltersStatus from './FiltersStatus'

class FilteringContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appliedFilters: {}
    };
  }

  applyFilters = filters => this.setState({
    appliedFilters: {
        ...this.state.appliedFilters,
        ...filters,
    }
  })

  unapplyFilter = filter => this.applyFilters({ [filter]: false })

  unapplyAllFilters = () => this.setState({ appliedFilters: {} })

  render(){
    return (
      <>
        <FilterMenu
          filters={filters}
          appliedFilters={this.state.appliedFilters}
          applyFilters={this.applyFilters}
        />
        <FiltersStatus
          appliedFilters={Object.entries(filters).reduce(
            (appliedFilters, [_, filters]) =>
              [...appliedFilters, ...filters.filter(filter => this.state.appliedFilters[filter.id])], []
          )}
          unapplyFilter={this.unapplyFilter}
          unapplyAllFilters={this.unapplyAllFilters}
        />
      </>
    );
  }

}

export default FilteringContainer;
