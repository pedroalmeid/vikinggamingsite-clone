import Head from "next/head";
import Layout from "../components/layout";
import NavigationMenu from "../components/navigationMenu";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Viking Gaming</title>
      </Head>

      <NavigationMenu/>
      <h1 className={styles.title}>Home</h1>
    </Layout>
  );
}
