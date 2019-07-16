import React from 'react';
import ArrowBox from 'components/ArrowBox/ArrowBox'
import Button from 'components/Button/Button'
import './FilterCategory.css'

const FilterButton = ({ title, id, onClick, selected }) => {
  const handleClick = () => onClick(id)
  return (<Button
    onClick={handleClick}
    selected={selected}
    key={id}
    text={title}
  />)
}

function FilterCategory(props) {
  const {
    name,
    isOpen,
    filters,
    onClick,
    selectedFilters,
    appliedFilters,
    onFilterClick,
    onApply,
    onCancel,
  } = props

  const handleClick = () => onClick(name)
  const handleCancel = () => onCancel(name)
  const appliedFiltersCount = filters.filter(filter => appliedFilters[filter.id]).length
  const appliedFiltersText = appliedFiltersCount > 0 ? `(${appliedFiltersCount})` : ''
  const someFilterSelected = filters.some(filter => selectedFilters[filter.id])
  return (
    <div className="Wrapper">
      <Button
        className='FilterCategoryButton'
        text={`${name} ${appliedFiltersText}`}
        onClick={handleClick}
        selected={isOpen}
      />
      {isOpen &&
        <ArrowBox>
          <div className='FiltersCategory'>
            {filters.map(filter =>
              <FilterButton
                key={filter.id}
                id={filter.id}
                title={filter.title}
                onClick={onFilterClick}
                selected={selectedFilters[filter.id]}
              />)}
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
          </div>
        </ArrowBox>}
    </div>
  );
}

export default FilterCategory;
