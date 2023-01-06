import { useState } from "react";
import { useRouter } from "next/router";

function EventList({ eventList }) {
  const router = useRouter();
  const [events, setEvent] = useState(eventList);
  const fetchSportsEvents = async () => {
    const response = await fetch(`http://localhost:3000/api/articles`);
    const data = await response.json();
    const filter = data.filter((article) => article.category === "sports");
    setEvent(filter);
    router.push("/events?category=sports", undefined, { shallow: true });
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

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(
    `http://localhost:3000/api/articles?${queryString}`
  );
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
