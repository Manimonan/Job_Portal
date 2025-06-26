import React from "react";
import { manageJobsPageData } from "../assets/Assets";

const ManageJobs = () => {
  return (
    <div className="container mx-auto p-4 m-5">
      <table className='w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm'>
        <thead className="border-b border-gray-300 bg-gray-100">
          <tr className="text-gray-700">
            <th className="py-3 px-5 text-center">#</th>
            <th className="py-3 px-5 text-center">Job Title</th>
            <th className="py-3 px-5 text-center max-sm:hidden">Date</th>
            <th className="py-3 px-5 text-center max-sm:hidden">Location</th>
            <th className="py-3 px-5 text-center">Applicants</th>
            <th className="py-3 px-5 text-center">Visible</th>
          </tr>
        </thead>
        <tbody>
          {manageJobsPageData.map((job, i) => (
            <tr key={i} className="text-gray-700 hover:bg-gray-50">
              <td className="py-2 px-4 border-b text-center">{i + 1}</td>
              <td className="py-2 px-4 border-b text-center">{job.jobTitle}</td>
              <td className="py-2 px-4 border-b text-center max-sm:hidden">{job.date}</td>
              <td className="py-2 px-4 border-b text-center max-sm:hidden">{job.location}</td>
              <td className="py-2 px-4 border-b text-center">
                {job.applicants}
              </td>
              <td className="py-2 px-4 border-b text-center">
                <input type="checkbox" checked={job.visible} readOnly />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageJobs;
