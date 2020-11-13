import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coniferous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Coniferous</h1>

        <p className={styles.description}>
          Cypress tests recorder and orchestrator
        </p>
        <p>Please be patient.</p>
        <p>Or... PR's welcome!</p>
      </main>
    </div>
  );
}
