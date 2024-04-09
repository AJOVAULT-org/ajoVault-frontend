import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'

function GetStartedBtn() {
  return (
   <Fragment>

    <Link to={"/signup"}>
    <button className='getStarted'>get started</button>
    </Link>

   </Fragment>
  )
}

export default GetStartedBtn