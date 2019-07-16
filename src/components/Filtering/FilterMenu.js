import React from 'react';
import './FilterMenu.css';
import FilterCategory from './FilterCategory'
import MoreFiltersCategory from './MoreFiltersCategory'
import { omit } from 'lodash';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilterCategory: null,
      selectedFilters: {},
    };
  }

  handleFilterCategoryClick = filter => this.setState({
    selectedFilterCategory: this.state.selectedFilterCategory === filter ? null : filter,
    selectedFilters: this.props.appliedFilters
  })

  handleFilterClick = filter => this.setState({
     selectedFilters: {
       ...this.state.selectedFilters,
       [filter]: !this.state.selectedFilters[filter]
     }
   })

   handleApply = () => {
     this.props.applyFilters(this.state.selectedFilters)
     this.setState({
       selectedFilterCategory: null
     })
   }

   handleCancel = filterCategory => this.setState({
     selectedFilters: {
       ...this.state.selectedFilters,
       ...this.props.filters[filterCategory].reduce(
         (obj, filter) => ({...obj, [filter.id]: false}), {}
       )
     },
   })

  renderCategory(filterCategory) {
    const { filters } = this.props
    return (
      <FilterCategory
        isOpen={this.state.selectedFilterCategory === filterCategory}
        selectedFilters={this.state.selectedFilters}
        appliedFilters={this.props.appliedFilters}
        onCancel={this.handleCancel}
        onClick={this.handleFilterCategoryClick}
        onApply={this.handleApply}
        onFilterClick={this.handleFilterClick}
        name={filterCategory}
        filters={filters[filterCategory]}
        key={filterCategory}
      />
    )
  }

  render(){
    const { filters } = this.props
    const filtersCategories = Object.keys(filters)
    return (
      <div className="FilterMenu">
        {this.renderCategory(filtersCategories[0])}
        {this.renderCategory(filtersCategories[1])}
        <div className="RestFilters">
          {filtersCategories.slice(2).map(filterCategory => this.renderCategory(filterCategory))}
        </div>
        <div className="MobileMoreFilters">
          <MoreFiltersCategory
            isOpen={this.state.selectedFilterCategory === 'More Filters'}
            selectedFilters={this.state.selectedFilters}
            appliedFilters={this.props.appliedFilters}
            onCancel={this.handleCancel}
            onClick={this.handleFilterCategoryClick}
            onApply={this.handleApply}
            onFilterClick={this.handleFilterClick}
            filters={omit(filters, [filtersCategories[0], filtersCategories[1]])}
          />
        </div>
      </div>
    );
  }

}

export default FilterMenu;
