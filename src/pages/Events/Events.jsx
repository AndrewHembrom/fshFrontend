import React from "react";
import { EventData } from "../../context/EventContext";
import EventCard from "../../components/EventCard";

const Events = () => {
  const { events } = EventData();
  return (
    <div className="events">
      <h2>Events</h2>

      <div className="events-container">
        {events && events.length > 0 ? (
          events.map((e) => {
            <EventCard key={e._id} course={e} />;
          })
        ) : (
          <p>No Events Yet</p>
        )}
      </div>
    </div>
  );
};

export default Events;
