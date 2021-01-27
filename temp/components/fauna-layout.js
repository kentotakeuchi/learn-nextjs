import Head from 'next/head';
import styles from '../styles/fauna-layout.module.css';

const LayoutFauna = ({ children }) => (
  <>
    <Head>
      <title>Next Fauna GraphQL CRUD</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className={styles.container}>{children}</div>
    </main>
  </>
);

export default LayoutFauna;
