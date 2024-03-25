"use client";

import React, { useState } from "react";
import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import { useRouter } from "next/navigation";
const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [prize, setPrize] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [expiresAt, setExpiresAt] = useState("");

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Processing");
    if (
      !title ||
      !description ||
      !imageUrl ||
      !prize ||
      !ticketPrice ||
      !expiresAt
    )
      return;
    const params = {
      title,
      description,
      imageUrl,
      prize,
      ticketPrice,
      expiresAt: new Date(expiresAt).getTime(),
    };
    console.log(params);
    onReset();
    router.push("/");
  };

  const onReset = () => {
    setDescription("");
    setExpiresAt("");
    setImageUrl("");
    setPrize("");
    setTicketPrice("");
    setTitle("");
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/app/favicon.ico" />
      </Head>
      <SubHeader />
      <div className="flex flex-col justify-center items-center py-10">
        <h2 className="font-semibold text-3xl  capitalize py-5">
          Create Jackpots
        </h2>
        <div className="flex flex-col items-center py-5 px-3">
          <p>We bring a persolan and effective to every project we work on.</p>
          <p>Which is why our client love why they keep coming back.</p>
        </div>
        <form onSubmit={handleSubmit} className=" w-full max-w-md ">
          <div className=" mb-4">
            <input
              className="border-2 border-slate-600  w-full text-lg py-3 px-3 rounded  appearance-none leading-tight focus:outline-none"
              id="title"
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className=" mb-4">
            <input
              className="border-2 border-slate-600  w-full text-lg py-3 px-3 rounded  appearance-none leading-tight focus:outline-none"
              id="imageUrl"
              placeholder="ImageUrl"
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div className=" mb-4">
            <input
              className="border-2 border-slate-600  w-full text-lg py-3 px-3 rounded  appearance-none leading-tight focus:outline-none"
              id="prize"
              placeholder="Prize Amount"
              type="number"
              value={prize}
              onChange={(e) => setPrize(e.target.value)}
              required
            />
          </div>
          <div className=" mb-4">
            <input
              className="border-2 border-slate-600  w-full text-lg py-3 px-3 rounded  appearance-none leading-tight focus:outline-none"
              id="ticketPrize"
              placeholder="Ticket Prize"
              type="number"
              value={ticketPrice}
              onChange={(e) => setTicketPrice(e.target.value)}
              required
            />
          </div>

          <div className=" mb-4">
            <input
              className="border-2 border-slate-600  w-full text-lg py-3 px-3 rounded  appearance-none leading-tight focus:outline-none"
              id="expiresAt"
              placeholder="Expires At"
              type="datetime-local"
              value={expiresAt}
              onChange={(e) => setExpiresAt(e.target.value)}
              required
            />
          </div>
          <div className=" mb-4">
            <textarea
              className="border-2 border-slate-600  w-full text-lg py-3 px-3 rounded  appearance-none leading-tight focus:outline-none"
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className=" w-full  bg-green-500 hover:bg-amber-600 text-white font-semibold hover:text-white rounded-2xl px-2 py-3 border border-blue-500 hover:border-transparent cursor-pointer"
            >
              Submit Jackpot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
