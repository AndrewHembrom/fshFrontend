import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";

const EventContext = createContext();

export const EventContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);

  async function fetchEvents() {
    try {
      const { data } = await axios.get(`${server}/api/event/all`);
      setEvents(data.events);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchEvent(id) {
    try {
      const { data } = await axios.get(`${server}/api/event/${id}`);
      setEvent(data.event);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <EventContext.Provider value={{ events, fetchEvents, fetchEvent, event }}>
      {children}
    </EventContext.Provider>
  );
};

export const EventData = () => useContext(EventContext);
