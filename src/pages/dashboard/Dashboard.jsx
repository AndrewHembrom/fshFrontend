import React from "react";
import "./dashboard.css";
import { EventData } from "../../context/EventContext";
import EventCard from "../../components/EventCard";

const Dashbord = () => {
  const { myevent } = EventData();
  return (
    <div className="student-dashboard">
      <h2>All Registered Events</h2>
      <div className="dashboard-content">
        {myevent && myevent.length > 0 ? (
          myevent.map((e) => <EventCard key={e._id} event={e} />)
        ) : (
          <p>No Events Registered Yet</p>
        )}
      </div>
    </div>
  );
};

export default Dashbord;
