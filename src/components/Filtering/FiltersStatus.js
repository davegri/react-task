import React from 'react';
import Button from 'components/Button/Button'
import './FiltersStatus.css'

const AppliedFilter = ({ id, title, onRemoveClick }) => {
  const handleRemoveClick = () => onRemoveClick(id)
  return (
    <span className="AppliedFilter">
    {title}
      <span className="RemoveButton" onClick={handleRemoveClick}>X</span>
    </span>
  )
}

const FiltersStatus = ({ appliedFilters, unapplyFilter, unapplyAllFilters }) => {
  return (
    <div className='FilterStatus'>
      <span className='AppliedFiltersTitle'>Applied Filters: {!appliedFilters.length && <span> -none- </span>}</span>
      {appliedFilters.map(filter =>
          (<AppliedFilter
            onRemoveClick={unapplyFilter}
            key={filter.id}
            id={filter.id}
            title={filter.title}
          />)
        )}
        {!!appliedFilters.length && <Button onClick={unapplyAllFilters} className="ClearButton" text='Clear All'/>}
    </div>
  )



}

export default FiltersStatus;
