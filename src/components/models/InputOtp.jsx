import React,{useState} from 'react'
import OtpInput from '../inputs/otpInputs'
import SmallHeader from '../headers/SmallHeader'
import Paragraph from '../paragraphs'
import SubmitBtn from '../buttons/submit-btn'


function InputOtp() {
    const [otp, setOtp] = useState();

    const handleChange =(e)=>{
        const {value}= e.target;
        const sanitizedValue = value.replace(/\D/g, '');
        setOtp(sanitizedValue.slice(0, 1));
    };

    const handleSubmit=()=>
    {
        console.log(setOtp());
    }
     return (
    <div className='otp-form'>
        <SmallHeader headertext="Enter the OTP sent to your email address"/>
        <form action="">
        <div className="otp-inputs">
         <OtpInput type="tel" name="num1"id="num1"change={handleChange} />
         <OtpInput type="tel" name="num2"id="num2"change={handleChange} />
         <OtpInput type="tel" name="num3"id="num3"change={handleChange} />
         <OtpInput type="tel" name="num4"id="num4"change={handleChange} />
         </div>
         <Paragraph ParagraphText="Didnt get the PIN ? resend in 5:00"/>
         <button onClick={handleSubmit}>next</button>
        </form>
    </div>
  )
}

export default InputOtp;