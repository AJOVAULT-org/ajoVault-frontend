import React, { useState, useEffect } from 'react';
import OtpInput from '../inputs/otpInputs';
import Paragraph from '../paragraphs';
import SmallHeaders from '../headers/headers/SmallHeaders';
// import { useHistory } from 'react-router-dom';

function FourDigitPin() {
    const [pin, setPin] = useState({
        num1: '',
        num2: '',
        num3: '',
        num4: ''
    });
    const [isBtnActive, setBtnAction] = useState({});
    // const history = useHistory();
    const handleChange = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = value.replace(/\D/g, '');
        setPin(prevPin => ({
            ...prevPin,
            [name]: sanitizedValue.slice(0, 1)
        }));
    };  

    const handleSubmit = (e) => {
        e.preventDefault();
        // history.push('/');
    }

    useEffect(() => {
        const mandatoryFields = ['num1', 'num2', 'num3', 'num4'];
        const allMandatoryFieldsFilled = mandatoryFields.every(field => pin[field].trim() !== '');
    
        if (allMandatoryFieldsFilled) {
            setBtnAction({ pointerEvents: "visible", backgroundColor: 'rgba(90, 71, 207, 1)' });
        } else {
            setBtnAction({ pointerEvents: "none", backgroundColor: 'rgba(181, 170, 252, 1)' });
        }
    }, [pin]);
    
    return (
        <div className='pin-form'>
            <SmallHeaders headertext="Lastly create a 4-digit pin you won't forget"/>
            <Paragraph ParagraphText="you will have t input this pin whenever you need to sign in after being out for a while"/>
            <form>
                <div className="pin-inputs">
                    <OtpInput type="tel" name="num1" id="num1" change={handleChange} />
                    <OtpInput type="tel" name="num2" id="num2" change={handleChange} />
                    <OtpInput type="tel" name="num3" id="num3" change={handleChange} />
                    <OtpInput type="tel" name="num4" id="num4" change={handleChange} />
                </div>
                <button style={isBtnActive} onClick={handleSubmit}>next</button>
            </form>
        </div>
    );
}

export default FourDigitPin;