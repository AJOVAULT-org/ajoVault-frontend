import React,{useState} from 'react'
import { useEffect } from 'react'
import OtpInput from '../inputs/otpInputs'
import Paragraph from '../paragraphs'
import SmallHeaders from '../headers/headers/SmallHeaders';
import Password from './Password';


function InputOtp() {
    const [otp, setOtp] = useState({
        num1: '',
        num2: '',
        num3: '',
        num4: ''
    });

    const [displayPassForm, hidePassForm] = useState(false);
    const [showForm, hideForm] = useState(true);

    const [isBtnActive, setBtnAction] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = value.replace(/\D/g, '');
        setOtp(prevOtp => ({
            ...prevOtp,
            [name]: sanitizedValue.slice(0, 1)
        }));
    };  

    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log("fuck you hussein")
        hidePassForm(true);
        hideForm(false);
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
    
    

     return (<div>
            {displayPassForm && <Password />}
            {showForm &&(
            <div className='otp-form'>
            <SmallHeaders headertext="Enter the OTP sent to your email address"/>
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
            </div>)}
            </div>)
}

export default InputOtp;