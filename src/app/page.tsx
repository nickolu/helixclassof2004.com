import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 min-h-screen">
      <section className="mb-12 text-center">
        <h1 className="text-6xl font-bold mb-4">FIRST ANNUAL CHARLES ST.</h1>
        <h2 className="text-5xl font-extrabold mb-8">2024 BLOCK PARTY</h2>
      </section>

      <section className="mb-12 text-center">
        <div className="text-3xl mb-8">
          <p>GAMES</p>
          <p>BOUNCE HOUSE</p>
          <p>BBQ</p>
          <p>MUSIC, FRIENDS</p>
        </div>
        <div className="text-4xl font-bold mb-4">
          <p>SEPT 15 | SUNDAY</p>
          <p>1 PM ONWARDS</p>
        </div>
      </section>

      <section className="mb-12 text-center">
        <h3 className="text-4xl font-bold mb-4">CHARLES ST. • LA MESA</h3>
        <p className="text-3xl font-semibold bg-yellow-400 text-blue-900 inline-block px-4 py-2 rounded-full">
          FREE ENTRY
        </p>
      </section>

      <section className="text-center mb-12">
        <h3 className="text-2xl mb-4">Bring Your Family and Friends!</h3>
        <p className="text-xl">
          Join us for a day of fun, food, and community spirit.
        </p>
      </section>

      <footer className="text-center text-sm">
        <p>For more information, contact: blockparty@charlesstreet.com</p>
      </footer>
    </main>
  );
}
