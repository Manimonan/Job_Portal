import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loading from "../Components/Loading";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import kConvater from "k-convert";
import Footer from "../Components/Footer";

function ApplyJob() {
  const { Id } = useParams();
  const { jobs } = useContext(AppContext);
  const navigate = useNavigate();
  const [jobData, setJobData] = React.useState(null);

  console.log(jobData);

  const fetchJobData = async () => {
    const data = jobs.filter((job) => job._id.toString() === Id);

    if (data.length !== 0) {
      setJobData(data[0]);
    }
  };
  React.useEffect(() => {
    if (jobs.length > 0) {
      fetchJobData();
    }
  }, [Id, jobs]);

  return jobData ? (
    <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto mt-20">
      <div className="bg-white text-black rounded-lg w-full mb-30">
        <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-500 rounded-2xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              className="h-20 w-20 lg:h-30 lg:w-30 bg-white rounded-lg p-2 m-1 border-2 border-amber-100"
              src={jobData.company.logo}
              alt=""
            />
            <div className="text-center md:text-left text-neutral-700">
              <h1 className="text-2xl sm:text-4xl font-medium">
                {jobData.title}
              </h1>
              <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 mt-4 items-center text-neutral-500">
                <span className="flex gap-2 items-center">
                  <LuBriefcaseBusiness className="text-2xl" />
                  {jobData.company.name}
                </span>
                <span className="flex gap-2 items-center">
                  <FaLocationDot className="text-2xl" />
                  {jobData.location}
                </span>
                <span className="flex gap-2 items-center">
                  <FaRegUser className="text-2xl" />
                  {jobData.level}
                </span>
                <span className="flex gap-2 items-center">
                  <GiMoneyStack className="text-2xl" />
                  <p> CTC : ₹ {kConvater.convertTo(jobData.salary)}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-end text-lg  max-md:mx-auto max-md:text-center">
            <button className="bg-blue-500 p-2.5 px-10 text-white rounded font-semibold cursor-pointer">
              Apply now
            </button>
            <span className="flex gap-2 items-center mt-3">
              <FaRegCalendarAlt className="text-2xl" />
              <p>{jobData.datePosted}</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Left section JobDescription */}
          <div className="w-full lg:w-2/3">
            <h2 className="font-bold text-2xl mb-4">Job description</h2>
            <div
              className="rich-text "
              dangerouslySetInnerHTML={{ __html: jobData.description }}
            ></div>
          </div>
          {/* Right section more related jobs */}
          <div className="w-full lg:w-1/3">
            <h2 className="font-bold text-2xl mb-4">
              More jobs from {jobData.company.name}
            </h2>
            <div className="flex flex-col gap-4">
              {jobs
                .filter(
                  (job) =>
                    job.company.name === jobData.company.name &&
                    job._id !== jobData._id
                )
                .slice(0, 3)
                .map((job) => (
                  <div className="border p-6 shadow rounded">
                    <div className="flex flex-col justify-between ">
                      <img
                        className="h-15 w-15 m-0.5 bg-amber-100 rounded-2xl"
                        src={job.company.logo}
                        alt=""
                      />
                      <h4 className="font-medium text-xl mt-2">{job.title}</h4>
                      <div className="flex items-center gap-2 mt-3 text-[12px]">
                        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded cursor-pointer">
                          {job.location}
                        </span>
                        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded cursor-pointer">
                          {job.level}
                        </span>
                      </div>
                      <p
                        className="mt-4 text-black"
                        dangerouslySetInnerHTML={{
                          __html: job.description.slice(0, 155),
                        }}
                      ></p>
                      <div className="flex items-center gap-2 mt-4">
                        <button
                          onClick={() => {
                            navigate(`/apply-job/${job._id}`);
                            scrollTo(0, 0);
                          }}
                          className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
                        >
                          Apply Now
                        </button>
                        <button
                          onClick={() => {
                            navigate(`/apply-job/${job._id}`);
                            scrollTo(0, 0);
                          }}
                          className="bg-amber-50  text-gray-600 border border-gray-400 px-4 py-2 rounded cursor-pointer "
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer className="mt-5" />
    </div>
  ) : (
    <Loading />
  );
}

export default ApplyJob;
