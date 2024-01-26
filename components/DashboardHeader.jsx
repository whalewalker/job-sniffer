import Link from "next/link";
import React from "react";
import { FaBell, FaUser } from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <header className="flex items-center h-[7rem] border-b border-b-color-grey-1 px-[3rem]">
      <Link href="/" className="font-nunito font-medium text-[2rem]">
        Job-Sniffer
      </Link>
      <div className="flex items-center ml-auto">
        <FaBell className="w-[2.2rem] h-[2.2rem] mr-[2rem]" />
        <button className="flex items-center cursor-pointer">
          <FaUser className="w-[2.2rem] h-[2.2rem] mr-[1rem]" />
          <p className="text-[1.8rem] font-medium">Ejim</p>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
