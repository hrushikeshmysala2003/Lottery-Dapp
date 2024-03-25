import React from "react";

const SubHeader = () => {
  return (
    <div
      className="bg-[url('../public/header_background.jpeg')] px-5 md:px-40 bg-red-500"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex justify-between items-center text-white py-3 ">
        <div>
          <h1 className="text-xl font-bold">DappLottery</h1>
        </div>

        <div className="hidden md:flex items-center space-x-5">
          <p>Home</p>
          <p>How to play</p>
          <p>All Lottery</p>
          <p>Contact</p>
        </div>

        <button className="bg-transparent hover:bg-amber-500 text-blue-700 font-semibold hover:text-white rounded px-2 py-3 border border-blue-500 hover:border-transparent cursor-pointer">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
