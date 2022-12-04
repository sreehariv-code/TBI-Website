import React, { useState, useEffect } from "react";

import EventCard from "../../components/EventCard";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const EventPage = () => {
  const [filterEvent, setFilterEvent] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=='event']{
          name,slug,gallery[]{
            asset->{
            url
          }
          }
        }`
      )
      .then((data) => setFilterEvent(data))
      .catch(console.error);
    console.table(filterEvent);
  }, []);
  console.log(filterEvent);

  return (
    <div>
      <h1>Event Page</h1>
      <div>
        {filterEvent &&
          filterEvent.map((event, index) => {
            return (
              <>
                <p>{event.name}</p>
                {event.gallery.map((image, index) => {
                  return <img width="200" src={image.asset.url} alt="" />;
                })}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default EventPage;
