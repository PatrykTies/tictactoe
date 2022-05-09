import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Game from '../components/Game';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LHS Test</title>
      </Head>

      <main className={styles.main}>
        <Game />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' LHS love'}
        </a>
      </footer>
    </div>
  );
}
