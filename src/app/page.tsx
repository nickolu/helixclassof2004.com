import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-black  to-green-900 text-white p-8">
      <div className="printable-version text-right mb-4">
        <a
          href="/flyer-dinner.jpeg"
          className="text-green-500 hover:text-green-300 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Printable Version
        </a>
      </div>

      <section className="mb-8">
        <h1 className="text-5xl font-bold text-green-400 mb-4">
          Helix High School Class of 2004
        </h1>
        <h2 className="text-3xl mb-4">20 Year Reunion</h2>
      </section>

      <section className="mb-8">
        <div className="mb-4">
          <p className="text-xl">Saturday, June 29th, 2024</p>
          <p className="text-xl font-semibold">6:00 PM - 8:30 PM</p>
          <p className="font-semibold mt-2">Dinner will start at 6pm!</p>
        </div>

        <div className="mb-8">
          <p className="font-bold text-xl mb-1">Giardino Restaurant</p>
          <address className="not-italic mb-4">
            8131 Broadway
            <br /> Lemon Grove, CA 91945
          </address>
          <p>
            <a
              href="https://www.giardinosd.com/"
              className="text-green-500 hover:text-green-300 mr-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
            |
            <a
              href="https://maps.app.goo.gl/GXj5nmaKACnHssy47"
              className="text-green-500 hover:text-green-300 ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
            </a>
          </p>
        </div>
      </section>

      <section className="mb-8">
        <p className="font-bold text-xl">$85 per person</p>
        <p>Includes appetizers, dinner, soda, dessert, and two drink tickets</p>
      </section>

      <section className="mb-8">
        <p>
          To purchase tickets, venmo{" "}
          <a
            href="/venmo-info.jpeg"
            className="text-green-500 hover:text-green-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Karina-Robledo5
          </a>
        </p>
      </section>

      <section className="mb-8">
        <p>
          Join the conversation on{" "}
          <a
            href="https://www.facebook.com/helix.class.of.2004.reunion"
            className="text-green-500 hover:text-green-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-3xl mb-4">Other Reunion Events</h2>
        <p>
          <a
            href="/flyer-all-events-5-23.jpg"
            target="_blank"
            className="text-green-500 hover:text-green-300"
            rel="noopener noreferrer"
          >
            Click here
          </a>{" "}
          for details about all of the reunion events.
        </p>
      </section>
      <div className="relative h-[500px]">
        {" "}
        {/* Adjust the height as needed */}
        {/* Other content of the parent element goes here */}
        <a href="https://www.helixcharter.net/" target="_blank">
          <div
            className="fixed bottom-0 right-0 bg-white p-14 rounded-full -mb-16 -mr-16"
            style={{
              width: "200px",
              height: "200px",
            }}
          >
            <Image
              width="188"
              height="122"
              src="/helix-logo.png"
              alt="Helix Charter High School Logo"
              className="relative bottom-0 right-5"
            />
          </div>
        </a>
      </div>
    </main>
  );
}
