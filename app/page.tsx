import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Header from '@/components/Header'
export default function Home() {
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
      </div>

    </div>
  );
}
