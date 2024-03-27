import React from 'react'

function SubmitBtn(props) {
  return (
    <button style={props.style} type='submit' className='submit-btn'>{props.btntext}</button>
  )
}

export default SubmitBtn;