import React,{useState, useEffect} from 'react'
import Inputs from '../inputs/Main-Inputs';
import SubmitBtn from '../buttons/submit-btn';
import SmallHeaders from '../headers/headers/SmallHeaders';

function Password() {

    const [data, setData]=useState();

    const handleChange=(e)=>{
        const password = e.target.value;
        console.log(password);
        setData(password);
    }

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
        change={handleChange}
        value={data}
        />
        <SubmitBtn type="submit" btntext="continue"/>
    </form>
    </div>
  )
}

export default Password;