import React from 'react'
import { ajoLogo2 } from '../../../public/assets';
import Inputs from '../../components/inputs/Main-Inputs';
import Mainheader from '../../components/headers/Main-header';
import Paragraph from '../../components/paragraphs';
import SubmitBtn from '../../components/buttons/submit-btn';

const SignUpPage = () => {
  return (
    <section className='sign-up'>
        <div className="text-side">
        <img src={ajoLogo2} />
            <div className="text">
                <h1>achieve your  financial goals with our solutions</h1>
                <Paragraph class="bright-text" ParagraphText="Join  other wise nigerians to revolutionise their personal finace, by combining individual savings with pool contribution." />
            </div>
        </div>
        <div className="input-side">
          <div className="user-form">
            <div className="header-text">
              <Mainheader headertext="Create a secure account" />
              <Paragraph class="main-paragraph" ParagraphText="easily meet your saving goals with ajovault"/>
             </div>
           <form action="/" method=''>
            <Inputs label="full name" type="text" id="fullName" placeholder="Enter your first name then last name"/>
            <Inputs label="email address" type="email" id="email" placeholder="Enter your email address"/>
            <Inputs label="phone number" type="tel" id="phoneBumber" placeholder="enter your phone number"/>
            <Inputs label="password" type="password" id="password" placeholder="enter your password"/>
            <Inputs label="promo code (optional)" type="text" id="promoCode" placeholder="enter promo code"/>
            <SubmitBtn btntext="create account"/>
           </form>
           <Paragraph class="main-paragraph" ParagraphText="already have an account?" />
         </div>
        </div>
    </section>
  )
}

export default SignUpPage;