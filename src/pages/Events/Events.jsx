import React from "react";
import { EventData } from "../../context/EventContext";
import EventCard from "../../components/EventCard";

const Events = () => {
  const { events } = EventData();
  return (
    <div className="events p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center">
        {events && events.length > 0 ? (
          events.map((e) => <EventCard key={e._id} event={e} />)
        ) : (
          <p>No Events Yet</p>
        )}
      </div>
    </div>
  );
};

export default Events;
