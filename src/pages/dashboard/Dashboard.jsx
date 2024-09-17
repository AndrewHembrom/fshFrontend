import React from "react";
import "./dashboard.css";
import { EventData } from "../../context/EventContext";
import EventCard from "../../components/EventCard";

const Dashbord = () => {
  const { myEvent } = EventData();
  console.log(myEvent);
  return (
    <div className="student-dashboard">
      <h2 className="heading">All Registered Events</h2>
      <div className="dashboard-content">
        {myEvent && myEvent.length > 0 ? (
          myEvent.map((e) => <EventCard key={e._id} event={e} />)
        ) : (
          <p>No Events Registered Yet</p>
        )}
      </div>
    </div>
  );
};

export default Dashbord;
