import React from 'react'

function OtpInput(props) {
  return (
    <div className="otp-input">
        <input 
        maxLength={1}
        inputMode="numeric"
        pattern="[0-9]*"
        className={props.class}
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