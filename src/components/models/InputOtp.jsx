import React from 'react'
import OtpInput from '../inputs/otpInputs'
import SmallHeader from '../headers/SmallHeader'
import Paragraph from '../paragraphs'
import SubmitBtn from '../buttons/submit-btn'


function InputOtp() {
  return (
    <div className='otp-form'>
        <SmallHeader headertext="Enter the OTP sent to your email address"/>
        <form action="">
        <div className="otp-inputs">
         <OtpInput type="number" name="num1"id="num1"change={()=>{}} />
         <OtpInput type="number" name="num2"id="num2"change={()=>{}} />
         <OtpInput type="number" name="num3"id="num3"change={()=>{}} />
         <OtpInput type="number" name="num4"id="num4"change={()=>{}} />
         </div>
         <Paragraph ParagraphText="Didnt get the PIN ? resend in 5:00"/>
         <SubmitBtn type="submit" btntext="next"/>
        </form>
    </div>
  )
}

export default InputOtp;