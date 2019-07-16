import React, { useState } from 'react';
import ArrowBox from 'components/ArrowBox/ArrowBox'
import Button from 'components/Button/Button'
import './FilterCategory.css'
import { flatten } from 'lodash';

const FilterButton = ({ title, id, onClick, selected }) => {
  const handleClick = () => onClick(id)
  return (<Button
    onClick={handleClick}
    selected={selected}
    key={id}
    text={title}
  />)
}

const FiltersSection = ({ name, filters, onFilterClick, selectedFilters, handleCancel, onApply }) => {
  const someFilterSelected = filters.some(filter => selectedFilters[filter.id])
  const [isVisible, setVisibilty] = useState(false);
  return (
    <div className='FiltersSection'>
      <h4 className={isVisible ? 'open' : ''} onClick={() => setVisibilty(!isVisible)}>{name}</h4>
      {isVisible &&
        <>
          <div className='FiltersSectionFilters'>
            {filters.map(filter => (
              <FilterButton
                key={filter.id}
                id={filter.id}
                title={filter.title}
                onClick={onFilterClick}
                selected={selectedFilters[filter.id]}
              />))}
            </div>
            <div className="Actions">
              <Button
                className={!someFilterSelected ? 'hidden' : ''}
                text='Cancel'
                onClick={handleCancel}
              />
              <Button
                text='Apply'
                onClick={onApply}
              />
            </div>
          </>
      }
      </div>
  )
}

function MoreFiltersCategory(props) {
  const {
    isOpen,
    filters,
    onClick,
    selectedFilters,
    appliedFilters,
    onFilterClick,
    onApply,
    onCancel,
  } = props

  const handleClick = () => onClick('More Filters')
  const handleCancel = () => onCancel('More Filters')

  const appliedFiltersCount =
    flatten(Object.values(filters))
    .filter(filter => appliedFilters[filter.id])
    .length
  const appliedFiltersText = appliedFiltersCount > 0 ? `(${appliedFiltersCount})` : ''

  return (
    <div className="Wrapper">
      <Button
        className='FilterCategoryButton'
        text={`More Filters ${appliedFiltersText}`}
        onClick={handleClick}
        selected={isOpen}
      />
      {isOpen &&
        <ArrowBox>
          <div className='FiltersCategory mobile'>
            {Object.keys(filters).map(filterCategory => (
              <FiltersSection
                name={filterCategory}
                filters={filters[filterCategory]}
                onFilterClick={onFilterClick}
                selectedFilters={selectedFilters}
                handleCancel={handleCancel}
                onApply={onApply}
              />
            ))}
          </div>
        </ArrowBox>}
    </div>
  );
}

export default MoreFiltersCategory;
