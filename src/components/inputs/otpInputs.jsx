import React from 'react'

function OtpInput(props) {
  return (
    <div className="otp-input">
        <label htmlFor={props.id}>{props.label}</label>
        <input 
        className='sign-up-form'
        type={props.type} 
        name={props.name} 
        id={props.id} 
        value={props.value} 
        placeholder={props.placeholder}
        onChange={props.change}
        />
    </div>
  )
}

export default OtpInput;