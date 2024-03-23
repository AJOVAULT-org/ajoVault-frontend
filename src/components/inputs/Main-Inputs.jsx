import React from 'react'

function Inputs(props) {
  return (
    <>
    <label>{props.label}</label>
    <input type={props.type} name={props.name} id={props.id} value={props.value} />
    </>
  );
}

export default Inputs