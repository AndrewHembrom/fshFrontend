import React from "react";
import { server } from "../main";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const MerchandiseCard = ({ merch }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();

  return (
    <div className="bg-gray-500 shadow-md rounded-md p-4 transition-transform transform hover:scale-105 hover:border-2 hover:border-slate-400 w-[70%]">
      <img
        src={`${server}/${merch.image}`}
        alt={merch.title}
        className="w-full h-[150px] object-cover rounded-md mb-4"
      />
      <h3>{merch.title}</h3>
      <p>Price - ₹{merch.price}</p>
      {isAuth ? (
        <>
          {user && user.role !== "admin" ? (
            <>
              {user.subscription.includes(merch._id) ? (
                <button
                  onClick={() => {
                    navigate(`/merch/registered/${merch._id}`);
                  }}
                  className="common-btn"
                >
                  ALready Bought
                </button>
              ) : (
                <button
                  onClick={() => {
                    // navigate(`/merch/${merch._id}`);
                    navigate(`/login`);
                  }}
                  className="common-btn"
                >
                  Buy
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => {
                navigate(`/merch/registered/${merch._id}`);
              }}
              className="common-btn"
            >
              Already Bought
            </button>
          )}
        </>
      ) : (
        <button
          onClick={() => {
            navigate(`/login`);
          }}
          className="common-btn"
        >
          Buy
        </button>
      )}
      {/* <br />

//       {user && user.role === "admin" && (
//         <button className="common-btn" style={{ backgroundColor: "red" }}>
//           Delete
//         </button>
//       )} */}
      {/* // =======
// //       <h3 className="text-center text-xl font-semibold mb-2">{merch.title}</h3>
// //       <p className="text-center text-gray-200 mb-4">Price - ₹{merch.price}</p>
// //       <p className="text-center ">
// //       <button 
// //         onClick={() => navigate(`/merch/${merch._id}`)}
// //         className="common-btn transition-all duration-300 hover:text-black hover:bg-slate-200 hover:shadow-md hover:border hover:border-blue-600 hover:text-black p-3 rounded-full"
// //       >
// //         Register
// //       </button>
// //       </p>
// // >>>>>>> Stashed changes */}
    </div>
  );
};

export default MerchandiseCard;
