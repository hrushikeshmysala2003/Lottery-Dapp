import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../public/header_background.jpeg";
const Jackpots = ({ jackpots }) => {
  return (
    <div>
      <div className="flex flex-col items-center py-8 px-5">
        <h2 className="text-2xl font-semibold py-6">Lottery Jackpots</h2>
        <p>We bring a persolan and effective to every project we work on.</p>
        <p>Which is why our client love why they keep coming back.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-10  w-4/5 mx-auto">
        {jackpots?.map((jackpot, i) => (
          <Jackpot jackpot={jackpot} key={i} />
        ))}
      </div>
    </div>
  );
};

const Jackpot = ({ jackpot }) => {
  return (
    <div className="shadow sm:shadow-md md:shadow-lg lg:shadow-xl  border border-neutral-400 rounded-3xl bg-slate-800 text-white px-5 py-6 ">
      <div className="flex space-x-4 sm:justify-between justify-start">
        <Image
          src={img}
          width={90}
          height={90}
          alt="icon"
          className="rounded-3xl"
        />
        <div>
          <p>Upto: {jackpot.prize} ETH</p>
          <p>Draws on: {jackpot.drawsAt}</p>
        </div>
      </div>
      <div className="py-5  " style={{ whiteSpace: "pre-wrap" }}>
        <p className="font-semibold text-xl py-2">{jackpot.title}</p>
        <p className="word-wrap py-2 ">{jackpot.description}</p>
      </div>
      <div className="h-20 flex items-center ">
        <Link
          href={"/jackpots/" + jackpot.id}
          className="bg-green-500 hover:bg-red-600 text-white font-semibold hover:text-white rounded-2xl px-5 py-3 border border-blue-500 hover:border-transparent cursor-pointer "
        >
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default Jackpots;
