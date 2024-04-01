import React, { useState, useEffect, Fragment } from 'react';
import Inputs from '../inputs/Main-Inputs';
import SubmitBtn from '../buttons/submit-btn';
import SmallHeaders from '../headers/headers/SmallHeaders';
import FourDigitPin from './FourPin';

function Password() {
    const [data, setData] = useState({ password: '' });
    const [isBtnActive, setBtnAction] = useState({});

    const [showFourDigit, setShowFourDigit] = useState(false);
    const [showPassForm, setShowPassForm] = useState(true);

    const handleChange = (e) => {
        const password = e.target.value;
        setData({ password: password });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("brooooooooooo");
        console.log(data);
        setShowFourDigit(true);
        setShowPassForm(false);
    };

    useEffect(() => {
        const mandatoryField = ["password"];
        const mandatoryFieldFilled = mandatoryField.every(field => data[field].trim() !== '');

        if (mandatoryFieldFilled) {
            setBtnAction({ pointerEvents: "visible", backgroundColor: 'rgba(90, 71, 207, 1)' });
        } else {
            setBtnAction({ pointerEvents: "none", backgroundColor: 'rgba(181, 170, 252, 1)' });
        }
    }, [data]);

    return (
        <Fragment>
            {showFourDigit && <FourDigitPin />}
            {showPassForm && (
                <div className='password-form'>
                    <div>
                        <SmallHeaders class="passcode-header" headertext="You're almost done." />
                        <SmallHeaders class="passcode-header" headertext="Enter your secure password." />
                    </div>
                    <form className='password'>
                        <Inputs 
                            label="password"
                            type="password" 
                            name="password" 
                            placeholder="Input your secure password." 
                            change={handleChange}
                            value={data.password}
                        />
                        <SubmitBtn click={handleSubmit} type="submit" btntext="continue" style={isBtnActive} />
                    </form>
                </div>
            )}
        </Fragment>
    );
}

export default Password;