import React from 'react';
import Paragraph from '../paragraphs';
import Mainheader from '../headers/Main-header';

function Verification() {
  return (
    <div className='Main-overlay'>
        <div className="close">
            <div></div>
            <div></div>
        </div>
        <div className="verification-model">
            <Mainheader headertext= " we need you to verify email address" />
            <div className="email-box">
                <div className="header">
                    <Mainheader headertext="verify now" />
                </div>
                <Paragraph ParagraphText="we will send you an OTP to your number through Whatsapp and sms"  class="" />
            </div>
        </div>
    </div>
  )
}


export default Verification;
