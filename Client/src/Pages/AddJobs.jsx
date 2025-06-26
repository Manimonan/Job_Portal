import React from "react";
import Quill from "quill";
import {jobCategories,jobLocations} from "../assets/Assets"; 


const AddJobs = () => {
  const [jobTitle, setJobTitle] = React.useState("");
  const [location, setLocation] = React.useState("Bangalore");
  const [jobCategory, setJobCategory] = React.useState("Programming");
  const [level, setLevel] = React.useState("Entry Level");
  const [salary, setSalary] = React.useState("");
  const [description, setDescription] = React.useState("");

  const editorRef = React.useRef(null);
  const quillRef = React.useRef(null);

  React.useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);
  return (
    <form action={''} className="contaner p-4 flex flex-col w-full items-start gap-3">
      <h1 className="text-2xl font-semibold mb-4">Add New Job</h1>
      <div className="mb-2 w-full">
        <label className="block text-lg font-semibold  mb-2">Job Title</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
          placeholder="Enter job title"
          required
        />
      </div>
      <div className="w-full max-w-lg mb-2">
        <p className=" block text-lg font-semibold  mb-2 my-2">Job Description</p>
        <div ref={editorRef}></div>
      </div>
      <div>
        <label className="block text-lg font-semibold  mb-2"> Job Category</label>
        <select
          value={jobCategory}
          onChange={(e) => setJobCategory(e.target.value)}
          className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
        >
         {jobCategories.map((item)=>
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          )}
        </select>
      </div>
      <div>
        <label className="block text-lg font-semibold  mb-2">Location</label>
        <select 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
        >
          {jobLocations.map((item)=>
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          )}
        </select>
      </div>
      <div>
        <label className="block text-lg font-semibold  mb-2">Job Level</label>
        <select 
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
        >
          <option value="Entry Level">Entry Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
          <option value="Internship">Internship</option>
        </select>
      </div>
      <div>
        <label className="block text-lg font-semibold  mb-2">Salary</label>
        <input
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
          placeholder="Enter salary range"
          required
        />
      </div>

      <button type="submit" className="py-2 px-10 text-lg font-serif bg-sky-300 border border-gray-400 cursor-pointer rounded-full mt-3 mx-2">ADD</button>
      
    </form>
  );
};

export default AddJobs;
