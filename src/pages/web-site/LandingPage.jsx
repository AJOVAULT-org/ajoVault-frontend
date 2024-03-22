import React from 'react'
import { ajoLogo2 } from '../../../public/assets';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const LandingPage = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-between">
      <div className="flex justify-between items-center px-[5%] w-full h-[130px] shadow-lg bg-transparent shadow-black/10">
        <img src={ajoLogo2} className=" h-[40px] lg:h-[70px]" alt="logo" />
        <div className="gap-9 flex justify-center items-center">
          <button className="lg:text-[24px] font-medium hidden mds:flex">
            Contact Us
          </button>
          <Link to={"/signup"}>
            <button className="bg-primary lg:px-12 px-4 py-4 rounded-[8px] text-white lg:text-[24px] font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <Link to={"/user/home"}>
        <h1 className="w-full flex justify-start items-center gap-5 italic font-semibold text-primary text-[24px] px-4 pb-4">
          Into the dashboard <FaArrowRight/>
        </h1>
      </Link>
    </div>
  );
}

export default LandingPage