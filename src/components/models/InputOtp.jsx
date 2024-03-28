import React from 'react'
import OtpInput from '../inputs/otpInputs'
import SmallHeader from '../headers/SmallHeader'

function InputOtp() {
  return (
    <div className='otp-form'>
        <SmallHeader headerText=""/>

        <form action="">
         <OtpInput type="number" name="num1"id="num1"change={()=>{}} />
         <OtpInput type="number" name="num2"id="num2"change={()=>{}} />
         <OtpInput type="number" name="num3"id="num3"change={()=>{}} />
         <OtpInput type="number" name="num4"id="num4"change={()=>{}} />
        </form>
    </div>
  )
}

export default InputOtp