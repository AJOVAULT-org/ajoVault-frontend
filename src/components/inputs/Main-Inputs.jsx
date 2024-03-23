import React from 'react';

function Inputs(props) {
  return (
    <div className='user-input'>
      <label htmlFor={props.id}>{props.label}</label>
      <input 
        type={props.type} 
        name={props.name} 
        id={props.id} 
        value={props.value} 
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Inputs;
