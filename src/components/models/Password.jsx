import React from 'react'
import Inputs from '../inputs/Main-Inputs';
import SubmitBtn from '../buttons/submit-btn';
import SmallHeaders from '../headers/headers/SmallHeaders';

function Password() {
  return (
    <div className='otp-form'>
    <SmallHeaders headertext="you're almost done ."/>
    <SmallHeaders headertext="enter your secure password."/>
    <form >
        <Inputs 
        type="password" 
        name="password" 
        placeholder="input your email address" 
        change={()=>{}}
        value=""
        />
        <SubmitBtn type="submit" btntext="continue"/>
    </form>
    </div>
  )
}

export default Password;