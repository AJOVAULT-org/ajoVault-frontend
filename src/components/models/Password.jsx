import React, { useState, useEffect, Fragment } from 'react';
import Inputs from '../inputs/Main-Inputs';
import SubmitBtn from '../buttons/submit-btn';
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
          <div className="password-form">
            <div>
              <p className="text-primary text-[20px]">You're almost done.</p>
              <p className="text-primary text-[20px]">
                Enter your secure password.
              </p>
            </div>
            <form className="password">
              <Inputs
                label="password"
                type="password"
                name="password"
                placeholder="Input your secure password."
                change={handleChange}
                value={data.password}
              />
              <SubmitBtn
                click={handleSubmit}
                type="submit"
                btntext="continue"
                style={isBtnActive}
              />
            </form>
          </div>
        )}
      </Fragment>
    );
}

export default Password;