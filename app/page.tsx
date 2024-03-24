import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Header from '@/components/Header'
import Jackpots from '@/components/Jackpots'

const data = [
  {
      id: 1,
      drawsAt: "28/9/2020",
      title: "LoremLoremLoremv",
      description: "Animals are multicellular, eukaryotic organisms in the biological kingdom Animalia. ",
      image: "https://ibb.co/PN2JXzp",
      prize: 10.32,
      ticketPrize: 0.02,
  },
  {
    id: 1,
    drawsAt: "28/9/2020",
    title: "LoremLoremLoremv",
    description: "Animals are multicellular, eukaryotic organisms in the biological kingdom Animalia. ",
    image: "https://ibb.co/PN2JXzp",
    prize: 10.32,
    ticketPrize: 0.02,
},

{
  id: 1,
  drawsAt: "28/9/2020",
  title: "LoremLoremLoremv",
  description: "Animals are multicellular, eukaryotic organisms in the biological kingdom Animalia. ",
  image: "https://ibb.co/PN2JXzp",
  prize: 10.32,
  ticketPrize: 0.02,
},
]

export default function Home() {

  const jackpots = data;

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
