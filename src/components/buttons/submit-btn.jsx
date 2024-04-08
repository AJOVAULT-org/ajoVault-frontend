import React from 'react'

function SubmitBtn(props) {
  return (
    <button onClick={props.click} style={props.style} type={props.type} className='submit-btn'>{props.btntext}</button>
  )
}

export default SubmitBtn;