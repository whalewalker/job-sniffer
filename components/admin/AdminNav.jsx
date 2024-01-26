import React from "react";
import { FaUser } from "react-icons/fa";
import Button from "../Button";
import Link from "next/link";

const AdminNav = () => {
  return (
    <header className="flex items-center h-[7rem] border-b border-b-color-grey-1 px-[3rem]">
      <p className="font-nunito font-medium text-[2rem]">Job-Sniffer</p>
      <div className="flex items-center ml-auto">
        <Link href="/admin/create">
          <Button text="Create Jobs" type="button" styles={"bg-[#5c7cfa] text-color-white py-[.5rem] px-[1rem] rounded-[.5rem]"} />
        </Link>
      </div>
    </header>
  );
};

export default AdminNav;
