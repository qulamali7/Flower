import React from "react";
import "./index.scss";
import EventsCard from "../EventsCard";
const EventsCards = () => {
  return (
    <>
      <div className="events_cards">
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
    </>
  );
};

export default EventsCards;
