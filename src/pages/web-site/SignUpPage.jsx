import React from 'react'
import { ajoLogo2 } from '../../../public/assets';
import Inputs from '../../components/inputs/Main-Inputs';
import Mainheader from '../../components/headers/Main-header';
import Paragraph from '../../components/paragraphs';

const SignUpPage = () => {
  return (
    <section className='sign-up'>
        <div className="text-side">
        <img src={ajoLogo2} />
            <div className="text">
                <h1>achieve your  financial goals with our solutions</h1>
                <Paragraph class="light-paragraph" ParagraphText="join  other wise nigerians to revolutionise personal finace by combining individual svings with pool contribution." />
            </div>
        </div>
        <div className="input-side">
          <Mainheader headertext="create a secure a account" />
          <Paragraph class="main-paragraph" ParagraphText="easily meet your saving goals with ajovault"/>
          <div className="user-form">
           <form action="/" method=''>
            <Inputs label="Full Name" type="text" id="fullName" placeholder="enter your first name then last name"/>
           </form>
         </div>
        </div>
    </section>
  )
}

export default SignUpPage;