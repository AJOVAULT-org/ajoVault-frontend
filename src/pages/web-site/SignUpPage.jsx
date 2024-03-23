import React from 'react'
import { ajoLogo2 } from '../../../public/assets';
import Inputs from '../../components/inputs/Main-Inputs';

const SignUpPage = () => {
  return (
    <section className='sign-up'>
        <div className="text-side">
        <img src={ajoLogo2} />
            <div className="text">
                <h1>achieve your  financial goals with our solutions</h1>
                <p>join  other wise nigerians to revolutionise personal finace by combining individual svings with pool contribution.</p>
            </div>
        </div>
        <div className="input-side">
        <form action="/" method=''>
        <Inputs label="Full Name" type="text" id="fullName" placeholder="enter your first name then last name"/>
        </form>
        </div>
    </section>
  )
}

export default SignUpPage;