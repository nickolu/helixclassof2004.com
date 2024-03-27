import React from "react";

export default function Home() {
  return (
    <main className="main bg-black text-white p-8">
      <p className="text-xs mb-2">
        Printable Version:{" "}
        <a
          href="/flyer-dinner.jpeg"
          className="text-green-500 hover:text-green-300"
          target="_blank"
        >
          click here
        </a>
      </p>
      <h1 className="text-4xl font-bold text-gold mb-4">
        Helix High School Class of 2004
      </h1>
      <h2 className="mb-4 text-2xl">20 Year Reunion</h2>

      <div className="time mb-4">
        <p className="mb-2">
          Saturday, June 29th, 2024 <br />
          6:00 PM - 8:30 PM
        </p>
        <p className="font-semibold">Dinner will start at 6pm!</p>
      </div>
      <div className="location mb-4">
        <p className="location-name font-bold mb-1">Giardino Restaurant</p>
        <p className="address mb-4">
          8131 Broadway
          <br /> Lemon Grove, CA 91945
        </p>
        <div className="restaurant-meta">
          <a
            href="https://www.giardinosd.com/"
            className="text-green-500 hover:text-green-300"
            target="_blank"
          >
            Website
          </a>{" "}
          |{" "}
          <a
            href="https://maps.app.goo.gl/GXj5nmaKACnHssy47"
            className="text-green-500 hover:text-green-300"
            target="_blank"
          >
            Directions
          </a>
        </div>
      </div>
      <div className="details mb-4">
        <p className="price font-bold">$85 per person</p>
        <p className="price-details">
          Includes appetizers, dinner, soda, dessert, and two drink tickets
        </p>
      </div>
      <div className="rsvp mb-4">
        <p>
          To purchase tickets, venmo{" "}
          <a
            href="/venmo-info.jpeg"
            className="text-green-500 hover:text-green-300"
            target="_blank"
          >
            @Karina-Robledo5
          </a>
        </p>
      </div>
      <div className="social">
        <p>
          Join the conversation on{" "}
          <a
            href="https://www.facebook.com/helix.class.of.2004.reunion"
            className="text-green-500 hover:text-green-300"
            target="_blank"
          >
            Facebook
          </a>
        </p>
      </div>
      <div className="other-events">
        <h2 className="text-2xl mt-8 mb-4">Other Reunion Events</h2>
        <p className="mb-4">
          <a
            href="/flyer-all-events.jpeg"
            target="_blank"
            className="text-green-500 hover:text-green-300"
          >
            Click here
          </a>{" "}
          for details about all of the reunion events.{" "}
        </p>
      </div>
    </main>
  );
}
