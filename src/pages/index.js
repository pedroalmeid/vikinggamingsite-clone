import Head from "next/head";
import Image from "next/image";

import Layout from "../components/layout";
import NavigationMenu from "../components/NavigationMenu/navigationMenu";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Viking Gaming</title>
      </Head>

      <div className={styles.pageHeader}>
        <NavigationMenu transparent />

        <div className={styles.headerContent}>
          <Image
            src="/images/viking-man.png"
            width={486}
            height={493}
            alt="Homem Viking"
          />
          <div>
            <h1 className={styles.headerTitle}>Viking Gaming</h1>
            <p className={styles.headerDescription}>
              A Viking é uma Organização de Esportes Eletrônicos fundada em
              Novembro de 2019, pela Italla Eny “Eny” e Izânio Cabral
              “IzyBjorn”. A forma dos Vikings se ariscarem no incerto, serem
              ambiciosos, focados e determinados, sem medo de se dedicar no que
              querem conquistar nos motiva a fazer o mesmo com nossa
              Organização.
            </p>
          </div>
        </div>
      </div>



    </Layout>
  );
}
