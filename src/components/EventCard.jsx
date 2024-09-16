import React from "react";
import { server } from "../main";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  console.log(event);
  const navigate = useNavigate();
  const { user, isAuth } = UserData();
  return (
    <div className="bg-slate-500 shadow-md rounded-md transition w-[250px]">
      <img
        src={`${server}/${event.image}`}
        alt=""
        className="w-[100px] h-[100px] object-cover rounded-md mb-[10px]"
      />
      <h3>{event.title}</h3>
      <p>Price - ₹{event.price}</p>
      {/* {isAuth ? (
        <>
          {user && user.role !== "admin" ? (
            <>
              {user.subscription.includes(event._id) ? (
                <button
                  onClick={() => {
                    navigate(`/event/registered/${event._id}`);
                  }}
                  className="common-btn"
                >
                  Registered
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate(`/event/${event._id}`);
                  }}
                  className="common-btn"
                >
                  Register
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => {
                navigate(`/event/registered/${event._id}`);
              }}
              className="common-btn"
            >
              Registered
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
          Register
        </button>
      )} */}

      {/* <br />

      {user && user.role === "admin" && (
        <button className="common-btn" style={{ backgroundColor: "red" }}>
          Delete
        </button>
      )} */}
    </div>
  );
};

export default EventCard;
