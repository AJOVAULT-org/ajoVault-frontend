import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown, FaAngleUp, FaTimes } from "react-icons/fa";
import Sidebar from "../../components/web-app/Sidebar";
import HeaderName from "../../components/web-app/HeaderName";
import Home from "../../components/dashboard-components/home/home";

const DashboardPage = () => {

  return (
    <div className="max-w-full h-screen flex font-montserrat">

      <Sidebar />
      <div className="w-4/5 bg- h-full p-[5%]">
        <HeaderName />
        <Home />
      </div>
    </div>
  );
};

export default DashboardPage;
