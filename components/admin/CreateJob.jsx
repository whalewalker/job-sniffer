"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../Button";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { notifySuccess } from "@/lib/notifications/notifySuccess";

const CreateJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setCompany(event.target.value);
  };
  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/add-jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, company, salary, type }),
      });

      // router.refresh();
      window.location.href = "/admin";
      // router.push("/admin");
      setLoading(false);
      notifySuccess("Job created successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-24 mt-10">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-lg font-medium text-gray-900 ">
              Job Title
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter job title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="salary" className="block mb-2 text-lg font-medium text-gray-900 ">
              Renumeration
            </label>
            <input
              type="number"
              id="salary"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="$2,000"
              value={salary}
              onChange={handleSalaryChange}
              required
            />
          </div>
          <div>
            <label htmlFor="company" className="block mb-2 text-lg font-medium text-gray-900 ">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Google Inc"
              value={company}
              onChange={handleContentChange}
              required
            />
          </div>
          <div>
            <label htmlFor="type" className="block mb-2 text-lg font-medium text-gray-900 ">
              Job Type
            </label>
            <input
              type="text"
              id="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Full-time | Contract | Part-time"
              value={type}
              onChange={handleTypeChange}
              required
            />
          </div>
        </div>
        {/* <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div> */}

        <div className="flex gap-5">
          {loading ? (
            <Button
              // disabled
              text="Adding Job"
              type="submit"
              styles={"bg-[#808080] text-color-white py-[.5rem] px-[1rem] rounded-[.5rem]"}
            />
          ) : (
            <Button text="Add Job" type="submit" styles={"bg-[#5c7cfa] text-color-white py-[.5rem] px-[1rem] rounded-[.5rem]"} />
          )}

          <Link href="/admin" className="flex items-center px-4 py-2 bg-[#5c7cfa] text-white  hover:bg-blue-600 rounded-[.5rem]">
            <FaArrowAltCircleLeft className="mx-2" />
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
