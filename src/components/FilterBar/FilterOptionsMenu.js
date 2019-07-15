import React from 'react';
import ArrowBox from 'components/ArrowBox/ArrowBox'
import Button from 'components/Button/Button'

function FilterOptionsMenu({ options }) {
  return (
    <ArrowBox>
      <div className='FilterOptionsMenu'>
        {options.map(option =>
          <Button
            key={option.id}
            text={option.title}
          />
        )}
      </div>
    </ArrowBox>
  );
}

export default FilterOptionsMenu;
