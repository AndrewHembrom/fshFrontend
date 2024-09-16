import React, { useEffect, useState } from "react";
import "./eventdescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { EventData } from "../../context/EventContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../../context/UserContext";
import Loading from "../../components/Loading/Loading.jsx";

const EventDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [bought, setBought] = useState(false);

  const { fetchUser } = UserData();

  const { fetchEvents, events, fetchEvent, event } = EventData();

  useEffect(() => {
    fetchEvent(params.id);
  });

  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    try {
      const data = await axios.get(
        `${server}/api/event/checkout/${params.id}`,
        {
          headers: {
            token,
          },
        }
      );
      console.log(data);
      setLoading(false);
      setBought(true);
      toast.success("Event Registered!");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {event && (
            <div className="event-description">
              <div className="event-header">
                <img
                  src={`${server}/${event.image}`}
                  alt=""
                  className="event-image"
                />
                <div className="event-info">
                  <h2>{event.title}</h2>
                </div>
              </div>

              <p>{event.description}</p>

              <p>Price - ₹{event.price}</p>
              <p>Time: {event.time}</p>
              <p>Venue: {event.venue}</p>
              <p>Members: {event.members}</p>

              {user && user.subscription.includes(event._id) ? (
                <button
                  // onClick={() => navigate(`/event/study/${event._id}`)}
                  className="common-btn"
                >
                  Registered
                </button>
              ) : bought ? (
                <p>Already Bought</p>
              ) : (
                <button onClick={checkoutHandler} className="common-btn">
                  Buy Now
                </button>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default EventDescription;
