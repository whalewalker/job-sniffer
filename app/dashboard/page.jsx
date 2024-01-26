import JobsList from "@/components/JobsList";
import SearchAndFilterJobs from "@/components/SearchAndFilterJobs";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#edf2ff] py-[5rem] h-[calc(100vh-7rem)] overflow-auto">
      <SearchAndFilterJobs />
      <JobsList />
    </div>
  );
};

export default page;
