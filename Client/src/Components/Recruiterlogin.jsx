import React, { useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { LuImagePlus } from "react-icons/lu";
import { GiCancel } from "react-icons/gi";

function Recruiterlogin() {
 const {setShowRecruitersLogin} = React.useContext(AppContext)
  const [state, setState] = React.useState("Login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [image, setImage] = React.useState(false);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = React.useState(false);

  const onSubmitHandeler = async (e) => {
    e.preventDefault();

    if (state === "Sign Up" && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
    }
  };

  useEffect(()=>{
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  },[])

 

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-20 flex justify-center items-center">
      <form
        onSubmit={onSubmitHandeler}
        className="relative bg-white rounded-lg shadow-lg p-10 text-slate-600 gap-4 flex flex-col "
      >
        <h1 className="text-center text-2xl text-neutral-700 font-semibold">
          Recruiter {state}
        </h1>
        <p className="font-serif">Welcome back! please {state} to continue</p>
        {state === "Sign Up" && isTextDataSubmitted ?
        
         (
          <>
          <div className="flex items-center gap-4 my-10">
            <label htmlFor="image" className="cursor-pointer">
              {image ? (
                <img className="w-16 h-16 p-2 rounded-full border border-amber-100 " src={URL.createObjectURL(image)} alt="" />
              ):(
                <LuImagePlus className="w-16 h-16 p-2 rounded-full border border-amber-100 text-10xl"/>
              )}
              
              <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden />
            </label>
            <p className="text-lg text-center mt-2">Upload Company Logo</p>
          </div>
          </>
         ):(
          <>
          {state !== "Login" && (
            <div className="border px-4 py-2 rounded-full flex items-center gap-2 mt-5">
              <IoPerson />
              <input
                className="outline-none text-sm"
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
                placeholder="Company name"
                required
              />
            </div>
          )}

          <div className="border px-4 py-2 rounded-full flex items-center gap-2 mt-5">
            <MdEmail />
            <input
              className="outline-none text-sm"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Email Id"
              required
            />
          </div>
          <div className="border px-4 py-2 rounded-full flex items-center gap-2 mt-5">
            <TbPasswordFingerprint />
            <input
              className="outline-none text-sm"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Password"
              required
            />
          </div>
          {state === "Login" && (
            <p className="text-sm text-blue-600 cursor-pointer mt-2">
              Forget Password?
            </p>
          )}
        </>
         )}

        

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-full cursor-pointer mt-2"
        >
          {state === "Login"
            ? "Login"
            : isTextDataSubmitted
            ? "Register"
            : "Next"}
        </button>
        {state === "Login" ? (
          <p className="mt-5 text-sm">
            Don't have an account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-sm">
            Already have an Account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <GiCancel className="absolute top-2 right-2 text-3xl cursor-pointer text-blue-300" onClick={()=>setShowRecruitersLogin(false)} />
      </form>
    </div>
  );
}

export default Recruiterlogin;
