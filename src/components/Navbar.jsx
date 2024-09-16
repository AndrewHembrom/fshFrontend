import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="border flex flex-row justify-around">
      <Link to={"/"}>Home</Link>
      <Link to={"/events"}>Events</Link>
      <Link to={"/store"}>Merchandise</Link>
    </div>
  );
};

export default Navbar;
