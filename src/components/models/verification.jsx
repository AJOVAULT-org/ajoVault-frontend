import React from 'react';
import { useState } from 'react';
import Paragraph from '../paragraphs';
import SmallHeader from '../headers/smallHeader';
import CheckOtp from './checkOtp';

function Verification({ isOpen, isClose }) {

    const [showOtpModal, setOtpModal] = useState(false);

    if (!isOpen) {
      return null;
    }

    return (
      <div className='Main-overlay'>
        {showOtpModal && CheckOtp}
        <button className="close" onClick={isClose}>
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
          </svg>
        </button>
        <div className="verification-model">
          <Paragraph ParagraphText= " We need you to verify email address ar***e@gmail.com" class="model-paragraph"/>
          <Paragraph ParagraphText="please select how you want to be verified below" class="model-paragraph-small" />
          <div className="email-box">
            <div className="header">
              <svg width="30px" height="30px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="layer1">
                  <path d="M 0 4 L 0 17 L 9 17 L 9 16 L 1.6621094 16 L 7.296875 11.753906 L 7.2988281 11.751953 L 6.46875 11.126953 L 6.4667969 11.128906 L 1 15.246094 L 1 5.9335938 L 9.0488281 12 L 10.951172 12 L 19 5.9335938 L 19 12.671875 L 20 13.671875 L 20 4 L 0 4 z M 1.6621094 5 L 18.337891 5 L 10.376953 11 L 9.6230469 11 L 1.6621094 5 z M 15 13 L 18 16 L 11 16 L 11 17 L 18 17 L 15 20 L 16.5 20 L 20 16.5 L 16.5 13 L 15 13 z " style={{ fill: "#F1F0E8", fillOpacity: 1, stroke: "none", strokeWidth: "0px" }}/>
                </g>
              </svg>
              <SmallHeader headertext="Verify with email"  class="small-header"/>
            </div>
            <Paragraph ParagraphText="We will send you an OTP to your number through Whatsapp and sms"  class="veri-paragraph" />
          </div>
        </div>
      </div>
    );
  }

  export default Verification;  