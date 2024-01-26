"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./Button";

const SearchAndFilterJobs = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  const inputStyles =
    "flex-1 py-[.5rem] outline-none ring-0 border-0 focus:outline-none focus:ring-0";

  const jobTitleInputChangeHandler = (e) => {
    setJobTitle(e.target.value);
  };

  const jobLocationInputChangeHandler = (e) => {
    setJobLocation(e.target.value);
  };

  const searchJobsSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={searchJobsSubmitHandler}
        className="flex items-center border rounded-[.5rem] p-[1rem] w-[60%] shadow-md border-color-grey-1 bg-color-white "
      >
        <div className="flex items-center border-r border-r-color-grey-1 flex-1">
          <IoSearchOutline className="w-[2.2rem] h-[2.2rem] mr-[1rem]" />
          <input
            type="text"
            placeholder="Job title"
            value={jobTitle}
            onChange={jobTitleInputChangeHandler}
            className={inputStyles}
            autoFocus
          />
        </div>
        <div className="flex items-center flex-1">
          <FaLocationDot className="w-[2.2rem] h-[2.2rem] mx-[1rem]" />
          <input
            type="text"
            placeholder={`City, State, Zipcode or "Remote"`}
            valur={jobLocation}
            onChange={jobLocationInputChangeHandler}
            className={inputStyles}
          />
        </div>
        <Button
          text="Find jobs"
          type="submit"
          styles={
            "bg-[#5c7cfa] text-color-white py-[.5rem] px-[1rem] rounded-[.5rem]"
          }
        />
      </form>
    </div>
  );
};

export default SearchAndFilterJobs;
