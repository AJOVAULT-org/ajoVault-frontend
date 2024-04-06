import React from 'react'
import { ajoLogo2 } from '../../../public/assets/icons';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { Fragment } from 'react';
// import { createBrowserRouter , re } from 'react-router-dom';
import IsHome from '../../components/web-site/IsHome';
import NavBar from '../../routes/NavBar';

const LandingPage = () => {
  return (
    <Fragment>
      <NavBar />
    <IsHome />
    </Fragment>
  );
}

export default LandingPage;

{/* <Link to={"/signup"}>
<button className="bg-primary lg:px-12 px-4 py-4 rounded-[8px] text-white lg:text-[24px] font-semibold">
  Get Started
</button>
</Link> */}

{/* <Link to={"/user/home"}>
<h1 className="w-full flex justify-start items-center gap-5 italic font-semibold text-primary text-[24px] px-4 pb-4">
  Into the dashboard <FaArrowRight/>
</h1>
</Link> */}