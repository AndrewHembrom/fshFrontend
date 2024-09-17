import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex flex-row justify-around bg-slate-800 p-4 rounded-full shadow-lg w-2/3">
      <Link
        to={"/"}
        className="text-white px-6 py-2 rounded-full transition-all duration-300 hover:text-black hover:bg-slate-200 hover:shadow-md hover:border hover:border-blue-600 hover:text-black"
      >
        Home
      </Link>
      <Link
        to={"/events"}
        className="text-white px-6 py-2 rounded-full transition-all duration-300 hover:text-black hover:bg-slate-200 hover:shadow-md hover:border hover:border-blue-600 hover:text-black"
      >
        Events
      </Link>
      <Link
        to={"/store"}
        className="text-white px-6 py-2 rounded-full transition-all duration-300 hover:text-black hover:bg-slate-200 hover:shadow-md hover:border hover:border-blue-600 hover:text-black"
      >
        Merchandise
      </Link>
    </div>

    // <div className="border flex flex-row justify-around">
    //   <Link to={"/"}>Home</Link>
    //   <Link to={"/events"}>Events</Link>
    //   <Link to={"/store"}>Merchandise</Link>
    // </div>
  );
};

export default Navbar;
