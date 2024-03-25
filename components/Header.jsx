import Image from "next/image";
import Link from "next/link";
import img from "../public/Cloud-Infrastructure.jpg";
const Header = () => {
  const background = "https://ibb.co/PN2JXzp";
  return (
    // bg-[url('../public/header_background.jpeg')] fixed no-repeat bg-cover

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

      <div className="md:flex justify-between items-center  py-16 text-white ">
        <div className="py-4 flex flex-col justify-between  ">
          <h2 className="md:text-5xl text-3xl   font-bold md:py-10 py-4">
            Take the chance to change your life
          </h2>
          <p className="text-xl">
            We bring a persolan and effective to every project we work on.
            Whichis why our client love why they keep coming back.
          </p>
        </div>
        <div>
          <Image
            className="rounded-3xl  "
            src={img}
            alt="none"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="h-20 py-6 flex items-center  ">
        <Link
          href={"/create"}
          className="bg-amber-500 hover:bg-red-600 text-white font-semibold hover:text-white rounded-2xl px-2 py-3 border border-blue-500 hover:border-transparent cursor-pointer"
        >
          Create Jackpot
        </Link>
      </div>
    </div>
  );
};

export default Header;
