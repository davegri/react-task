import React from 'react';
import ArrowBox from 'components/ArrowBox/ArrowBox'
import Button from 'components/Button/Button'
import FilterOptionsMenu from 'components/FilterBar/FilterOptionsMenu'

function Filter({ name, showOptions, options, onClick }) {

  const handleClick = () => onClick(name)
  return (
    <div className="wrapper">
      <Button className='FilterButon' text={name} onClick={handleClick} selected={showOptions}/>
      {showOptions && <FilterOptionsMenu options={options}/>}
    </div>
  );
}

export default Filter;
