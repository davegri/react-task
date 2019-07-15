import React from 'react';
import './Button.css'

function Button (props) {
  const { text, selected, onClick } = props
  const className = `Button ${props.className} ${selected ? 'selected' : ''}`
  return (
    <span className={className} onClick={onClick}>
    {text}
    </span>
  );
}

export default Button;
