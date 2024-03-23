import React from 'react'

function SubmitBtn(props) {
  return (
    <button type='submit' className='submit-btn'>{props.btntext}</button>
  )
}

export default SubmitBtn;