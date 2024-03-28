import React,{useState} from 'react'
import { useEffect } from 'react'
import OtpInput from '../inputs/otpInputs'
import Paragraph from '../paragraphs'
import SmallHeader from '../headers/smallHeader';


function InputOtp() {
    const [otp, setOtp] = useState({
        num1: '',
        num2: '',
        num3: '',
        num4: ''
    });
    const [isBtnActive, setBtnAction] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = value.replace(/\D/g, '');
        setOtp(prevOtp => ({
            ...prevOtp,
            [name]: sanitizedValue.slice(0, 1)
        }));
    };    4444

    const handleSubmit=(e)=> {
        e.preventDefault();
    }
    useEffect(() => {
        const mandatoryFields = ['num1', 'num2', 'num3', 'num4'];
        const allMandatoryFieldsFilled = mandatoryFields.every(field => otp[field].trim() !== '');
    
        if (allMandatoryFieldsFilled) {
            setBtnAction({ pointerEvents: "visible", backgroundColor: 'rgba(90, 71, 207, 1)' });
        } else {
            setBtnAction({ pointerEvents: "none", backgroundColor: 'rgba(181, 170, 252, 1)' });
        }
    }, [otp]);
    
    

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
         <button  style={isBtnActive}  onClick={handleSubmit}>next</button>
        </form>
    </div>
  )
}

export default InputOtp;