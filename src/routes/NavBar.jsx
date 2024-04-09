import React from 'react'
import { Link } from 'react-router-dom';
import GetStartedBtn from '../components/buttons/GetStartedBtn';
import { ajoLogo2 } from "../../public/assets/index";

function NavBar() {
  return (
   <header className='nav-items'>
    <img src={ajoLogo2} alt="" />
    <nav className='nav-links'>
        <Link to="#"><li>contact us</li></Link>
        <GetStartedBtn />
    </nav>
   </header>
  )
}

export default NavBar;