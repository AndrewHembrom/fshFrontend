import React from "react";
import { EventData } from "../../context/EventContext";
import MerchandiseCard from "../../components/EventCard";

const Merchandise = () => {
  return (
    <div className="events p-20">
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center">
        {events && events.length > 0 ? (
          events.map((e) => <MerchandiseCard key={e._id} Merchandise={e} />)
        ) : (
          <p>NO Events Yet</p>
        )}
      </div>
    </div>
  );
};

export default Merchandise;
