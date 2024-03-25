import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ajoLogo2 } from '../../../public/assets';
import Inputs from '../../components/inputs/Main-Inputs';
import Mainheader from '../../components/headers/Main-header';
import Paragraph from '../../components/paragraphs';
import SubmitBtn from '../../components/buttons/submit-btn';

const SignUpPage = () => {

  const [inputs ,setInputs]= useState({
    fullName:"",
    email:"",
    password:"",
    phoneNumber:""
  });

  const [btnBg, setBtnBg] = useState({});

  const handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values =>({...values,[name]:value}));
    console.log(value);
  }

  useEffect(() => {
    const mandatoryFields = ['fullName', 'email', 'password', 'phoneNumber'];
    const allMandatoryFieldsFilled = mandatoryFields.every(field => inputs[field].trim() !== '');
  
    if (allMandatoryFieldsFilled && (inputs.promoCode === undefined || inputs.promoCode.trim() !== '')) {
      setBtnBg({ backgroundColor: 'rgba(90, 71, 207, 1)' });
    } else {
      setBtnBg({ backgroundColor: 'rgba(181, 170, 252, 1)' });
    }
  }, [inputs]);  

  const handleSubmit = (e) => {
    const mandatoryFields = ['fullName', 'email', 'password', 'phoneNumber'];
    const allMandatoryFieldsFilled = mandatoryFields.every(field => inputs[field].trim() !== '');
    console.log('Form submitted.');
  };


  return (
    <section className='sign-up'>
      <div className="text-side">
        <img src={ajoLogo2} alt="Ajo Logo" />
        <div className="text">
          <h1>achieve your financial goals with our solutions</h1>
          <Paragraph class="bright-text" ParagraphText="Join other wise Nigerians to revolutionise their personal finance by combining individual savings with pool contribution." />
        </div>
      </div>
      <div className="input-side">
        <div className="user-form">
          <div className="header-text">
            <Mainheader headertext="Create a secure account" />
            <Paragraph class="main-paragraph" ParagraphText="Easily meet your saving goals with AjoVault" />
          </div>
          <form onSubmit={handleSubmit}>
            <Inputs change={handleChange} label="Full Name" type="text" id="fullName" name="fullName" value={inputs.fullName || ""} placeholder="Enter your first inputValues then last name" />
            <Inputs change={handleChange} label="Email Address" type="email" id="email" name="email" value={inputs.email || ""} placeholder="Enter your email address" />
            <Inputs change={handleChange} label="Phone Number" type="tel" id="phoneNumber" name="phoneNumber" value={inputs.phoneNumber || ""} placeholder="Enter your phone number" />
            <Inputs change={handleChange} label="Password" type="password" id="password" name="password" value={inputs.password || ""} placeholder="Enter your password" />
            <Inputs change={handleChange} label="Promo Code (Optional)" type="text" id="promoCode" name="promoCode" value={inputs.promoCode || ""} placeholder="Enter promo code" />
            <SubmitBtn style={btnBg} btntext="Create Account" />
          </form>
          <div className="footer">
            <Paragraph class="dark-paragraph" ParagraphText="Already have an account?" />
            <Link to={"/LogInPage"}><h1>log in</h1></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUpPage;