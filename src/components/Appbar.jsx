import Navbar from "./Navbar";
import React from "react";

const Appbar = () => {
  return (
    <div className="border flex flex-row justify-between">
      <div>Company</div>
      <div className="flex-1">
        <Navbar />
      </div>
      <div>Account</div>
    </div>
  );
};

export default Appbar;
