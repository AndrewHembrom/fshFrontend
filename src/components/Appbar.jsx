import Navbar from "./Navbar";
import React from "react";

const Appbar = () => {
  return (
    <div>
      <div className="top-0 left-0 right-0 flex items-center justify-between px-4">
      
      <div className="bg-violet-600 p-4 rounded-full shadow-lg text-slate-50 flex items-center">
        <span className="px-6 py-2">Company</span>
      </div>
      <div className="flex-1 mx-4">
        <Navbar />
      </div>
      <div className="bg-violet-600 p-4 rounded-full shadow-lg text-white  0 flex items-center">
        <span className="px-6 py-2">Account</span>
      </div>
    </div>
    </div>
  );
};

export default Appbar;