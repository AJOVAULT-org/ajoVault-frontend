import React, { useState, useEffect } from 'react';
import Inputs from '../inputs/Main-Inputs';
import SubmitBtn from '../buttons/submit-btn';
import SmallHeaders from '../headers/headers/SmallHeaders';

function Password() {
    const [data, setData] = useState({ password: '' });
    const [isBtnActive, setBtnAction] = useState({});

    const handleChange = (e) => {
        const password = e.target.value;
        setData({ password: password });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("brooooooooooo");
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
        <div className='password-form'>
            <div>
                <SmallHeaders className="passcode-header" headertext="You're almost done." />
                <SmallHeaders className="passcode-header" headertext="Enter your secure password." />
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
    );
}

export default Password;
