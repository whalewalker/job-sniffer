import React from "react";
import JobItem from "./JobItem";
import prisma from "@/lib/prisma";

async function getJobPost() {
  const results = await prisma.post.findMany({
    where: { available: true },
  });

  return results;
}

const JobsList = async () => {
  const JobPosts = await getJobPost();

  return (
    <div className="grid grid-cols-3 gap-[3rem] mt-10 mx-10">
      {JobPosts.map((item, i) => (
        <JobItem item={item} key={i} />
      ))}
    </div>
  );
};

export default JobsList;
