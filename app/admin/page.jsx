import React, { Fragment } from "react";
import prisma from "@/lib/prisma";
import JobItem from "@/components/admin/JobItem";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

async function getJobPost() {
  const results = await prisma.post.findMany({
    where: { available: true },
  });

  return results;
}

const AdminDashboard = async () => {
  const jobPosting = await getJobPost();

  return (
    <Fragment>
      <div className="grid grid-cols-3 my-10 mx-10">
        {jobPosting.map((job) => (
          <JobItem job={job} key={job.id} />
        ))}
      </div>
      {jobPosting.length === 0 && (
        <div className="flex flex-col justify-center py-12 items-center">
          <div className="flex justify-center items-center">
            <Image
              className="w-64 h-64"
              src="https://res.cloudinary.com/daqsjyrgg/image/upload/v1690257804/jjqw2hfv0t6karxdeq1s.svg"
              alt="image empty states"
              width={400}
              height={400}
            />
          </div>

          <div className="flex flex-col justify-center ">
            <Link href="admin/create" className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6  mr-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Create New Jobs
            </Link>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AdminDashboard;
