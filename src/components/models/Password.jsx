import React from 'react'
import Inputs from 'postcss/lib/input'
import SubmitBtn from '../buttons/submit-btn';
import SmallHeaders from '../headers/headers/SmallHeaders';

function Password() {
  return (
    <div className='otp-form'>
    <SmallHeaders headertext="you're almost done ."/>
    <SmallHeaders headertext="emter your secure password."/>
    <form action="">
             <Inputs
                change={()=>{}}
                label="password"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
        <SubmitBtn btntext="continue"/>
    </form>
    </div>
  )
}

export default Password;