import React from "react";
import { server } from "../main";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const EventCard = () => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();
  return (
    <div className="event-card">
      <img src={`${server}/${events.image}`} alt="" className="event-image" />
      <h3>{events.title}</h3>
      <p>{events.description}</p>
      <p>Venue - {events.venue}</p>
      <p>Time - {events.time} weeks</p>
      <p>Members - {events.members}</p>
      <p>Price - ₹{events.price}</p>
      {isAuth ? (
        <>
          {user && user.role !== "admin" ? (
            <>
              {user.subscription.includes(events._id) ? (
                <button
                  onClick={() => {
                    navigate(`/events/registered/${events._id}`);
                  }}
                  className="common-btn"
                >
                  Registered
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate(`/events/${events._id}`);
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
                navigate(`/events/registered/${events._id}`);
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
      )}

      <br />

      {user && user.role === "admin" && (
        <button className="common-btn" style={{ backgroundColor: "red" }}>
          Delete
        </button>
      )}
    </div>
  );
};

export default EventCard;
