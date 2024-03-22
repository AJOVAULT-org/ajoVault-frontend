import React from 'react'
import { ajoLogo2 } from '../../../public/assets';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-white h-screen">
      <div className="flex justify-between items-center px-[5%] w-full h-[130px] shadow-lg bg-transparent shadow-black/10">
        <img src={ajoLogo2} className="h-[70px]" alt="logo" />
        <div className="gap-9 flex">
          <button className="text-[24px] font-medium">Contact Us</button>
          <Link to={"/signup"}>
            <button className="bg-primary px-12 py-4 rounded-[8px] text-white text-[24px] font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage