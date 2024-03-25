import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Header from "@/components/Header";
import Jackpots from "@/components/Jackpots";
import { generateLotteries } from "@/services/fakeData";

export default function Home() {
  const jackpots = generateLotteries(5);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/app/favicon.ico" />
      </Head>

      {/* <h1>Hello</h1> */}
      <div>
        {/* Header */}
        {/* JackPot */}
        <Header />
        <Jackpots jackpots={jackpots} />
      </div>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const data = generateLotteries(5);

//   return {
//     props: {
//       jackpots: JSON.parse(JSON.stringify(data)),
//     },
//   };
// };
