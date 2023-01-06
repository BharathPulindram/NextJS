import { useState } from "react";

function EventList({ eventList }) {
  const [events, setEvent] = useState(eventList);
  const fetchSportsEvents = async () => {
    const response = await fetch(`http://localhost:3000/api/articles`);
    const data = await response.json();
    const filter = data.filter((article) => article.category === "sports");
    setEvent(filter);
  };
  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Event</button>
      <h1>List of Events</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default EventList;

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/articles`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
