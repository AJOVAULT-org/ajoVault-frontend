import React from 'react'
import Inputs from '../inputs/Main-Inputs';
import SubmitBtn from '../buttons/submit-btn';
import SmallHeaders from '../headers/headers/SmallHeaders';

function Password() {
  return (
    <div className='password-form'>
    <div>
    <SmallHeaders class="passcode-header" headertext="You're almost done ."/>
    <SmallHeaders class="passcode-header" headertext="Enter your secure password."/>
    </div>
    <form  className='password'>
        <Inputs 
        label="password"
        type="password" 
        name="password" 
        placeholder="input your secure password." 
        change={()=>{}}
        value=""
        />
        <SubmitBtn type="submit" btntext="continue"/>
    </form>
    </div>
  )
}

export default Password;