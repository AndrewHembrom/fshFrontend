import Navbar from "./Navbar";
import React from "react";
import { Link } from "react-router-dom";
import { UserData } from "../context/UserContext";

const Appbar = () => {
  const { isAuth } = UserData();
  return (
    <div className="pt-[15px]">
      <div className="top-0 left-0 right-0 flex items-center justify-between px-4">
        <div className="bg-slate-800 p-4 rounded-full shadow-lg text-slate-50 flex items-center">
          <img
            src="src/assets/1607002743_VIT-New-white_new.png"
            width={110}
          ></img>
        </div>
        <div className="flex-1 mx-4">
          <Navbar />
        </div>
        <div className="bg-slate-700 p-4 rounded-full shadow-lg text-white transition-all duration-300 hover:text-black hover:bg-slate-200 hover:shadow-md hover:border hover:border-blue-600 hover:text-black 0 flex items-center">
          <span className="px-6 py-2">
            {isAuth ? (
              <Link to={"/account"}>Account</Link>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
