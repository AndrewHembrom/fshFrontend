import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";

const EventContext = createContext();

export const EventContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);
  const [myEvent, setMyEvent] = useState([]);

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

  async function fetchMyEvent() {
    try {
      const { data } = await axios.get(`${server}/api/myevents`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setMyEvent(data.events);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEvents();
    fetchMyEvent();
  }, []);

  return (
    <EventContext.Provider
      value={{ events, fetchEvents, fetchEvent, event, myEvent, fetchMyEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const EventData = () => useContext(EventContext);
