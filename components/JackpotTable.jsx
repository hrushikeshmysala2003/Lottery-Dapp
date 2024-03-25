import React from "react";
import Link from "next/link";
import { FaEthereum } from "react-icons/fa";
const JackpotTable = () => {
  return (
    <div>
      <div className="py-8 flex flex-col justify-center items-center  ">
        <h1 className="text-3xl font-bold py-5">But Lottery Tickets Online</h1>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-2xl font-semibold ">Jackpot?.title</p>
          <p>jackpot?.description</p>
          <p>jackpot?.participants participants</p>
        </div>

        <div className="flex flex-row space-x-10 justify-center py-8">
          <button className="bg-red-500 hover:bg-amber-500 text-white font-semibold hover:text-white rounded-2xl px-2 py-3 border border-blue-500 hover:border-transparent cursor-pointer">
            Generate Lucky Numbers
          </button>
          <Link href={"/drawresult"}>
            <button className="bg-green-500 hover:bg-blue-600 text-white font-semibold hover:text-white rounded-2xl px-2 py-3 border border-blue-500 hover:border-transparent cursor-pointer">
              Draw Result
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white text-sm overflow-x-auto flex flex-col w-full sm:w-3/4 mx-auto p-5 rounded-md">
        <div className="pb-4 text-center">
          <p className="font-semibold text-2xl text-center">
            Select Your winning Lottery
          </p>
        </div>

        <table className="table-auto ">
          <thead className="max-h-80 overflow-auto block ">
            <tr className="flex justify-between text-left">
              <th className="py-2 px-4">@</th>
              <th className="py-2 px-4">Ticket Price</th>
              <th className="py-2 px-4">Draw Date</th>
              <th className="py-2 px-4">Ticket Number</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody className="max-h-80 overflow-y-auto block">
            {Array(5)
              .fill()
              ?.map((luckyNumber, i) => (
                <tr className="flex justify-between text-left border-b">
                  <td className="px-4 py-2 font-semibold">{i + 1}</td>
                  <td className="px-4 py-2 font-semibold">
                    <div className="flex justify-center items-center space-x-1">
                      <FaEthereum />
                      <span>jackpot?.ticketPrice</span>
                    </div>
                  </td>
                  <td className="px-4 py-2 font-semibold">jackpot?.drawsAt</td>
                  <td className="px-4 py-2 font-semibold">luckyNumber</td>
                  <td className="px-4 py-2 font-semibold">
                    <button
                      onClick={() => handlePurchase(i)}
                      className="bg-amber-500 hover:bg-red-600 text-white font-semibold hover:text-white rounded-2xl px-2 py-3 border border-blue-500 hover:border-transparent cursor-pointer"
                    >
                      BUY NOW
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JackpotTable;
