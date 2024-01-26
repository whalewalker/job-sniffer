"use client";
import React from "react";
import { FaRegBookmark, FaEdit } from "react-icons/fa";
import Button from "../Button";
import { useRouter } from "next/navigation";

const JobItem = ({ job }) => {
  const router = useRouter();

  async function handleDelClick() {
    try {
      await fetch(`/api/jobs/${job.id}`, {
        method: "DELETE",
      });

      router.refresh();
    } catch (error) {
      console.log("err", error);
    }
  }

  return (
    <div className="border py-[1rem] px-[2.5rem] rounded-[.5rem] border-color-grey-1 w-[42rem] bg-color-white shadow-md mb-7">
      <div className="flex items-center justify-between w-full">
        <p>{job.title}</p>
        <FaEdit className="w-[2.2rem] h-[2.2rem] cursor-pointer" />
      </div>
      <p>{job.company}</p>
      <p>location</p>
      <div className="flex items-center gap-2">
        <p>${job.salary} a month</p>
        <p>{job.type}</p>
      </div>
      <div>
        <p>Easy apply</p>
      </div>
      <ul className="list-disc">
        <li>Design and develop a responsive, user-centric website using React.</li>
        <li>Ensure the technical feasibility of UI/UX designs while maintaining high-quality graphic standards and brand consistency.</li>
        <li>Optimize the application for maximum speed and scalability across various devices, including mobile phones and tablets.</li>
      </ul>
      <p className="text-[1.2rem] text-color-grey-1">Posted 23 days</p>
      <Button
        onclick={handleDelClick}
        text="Disable Job"
        type="button"
        styles={"bg-[#5c7cfa] text-color-white py-[.5rem] px-[1rem] rounded-[.5rem] mt-[2rem]"}
      />
    </div>
  );
};

export default JobItem;
