import Head from "next/head";
import Image from "next/image";

import Layout from "../components/layout";
import NavigationMenu from "../components/NavigationMenu/navigationMenu";
import HomeModalityCard from "../components/HomeModalityCard/homeModalityCard";
import Button from "../components/Button/button";

import styles from "../styles/home.module.scss";

import useClassNames from "classnames";

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Viking Gaming</title>
      </Head>

      <section className={styles.pageHeader}>
        <NavigationMenu transparent />

        <div className={styles.headerContent}>
          <Image
            src="/images/viking-man.png"
            width={486}
            height={493}
            alt="Homem Viking"
            className={styles.headerImage}
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

            <nav className={styles.modalitiesSection}>
              <span className={styles.modalitiesMenuTitle}>
                Os jogos em que atuamos
              </span>
              <div className={styles.modalitiesMenu}>
                <HomeModalityCard modality="freefire" />
                <HomeModalityCard modality="wildrift" />
                <HomeModalityCard modality="streamers" />
              </div>
            </nav>
          </div>
        </div>
      </section>

      <div className={styles.contentContainer}>
        <section className={styles.contentSection}>
          <div className={styles.contentBox}>
            <h2>Line-Ups</h2>
            <p>
              Possuímos equipes nos jogos Free Fire, Wild Rift e Valorant, que
              nos representam disputando campeonatos e torneios amadores e
              oficiais das modalidades. Acesse nossa página das lines e conheça
              mais sobre cada um dos jogadores de nossa organização
            </p>
            <Button text="Ver mais" route="/lineups" />
          </div>
          <div className={useClassNames(styles.contentBox, styles.rightAlined)}>
            <h2>Streamers e Criadores de Conteúdo</h2>
            <p>
              Integramos a nossa equipe alguns streamers e criadores de conteúdo
              que estão a todo momento dedicados a gerar entretenimento no mundo
              dos games e dos esports. Confira quem são e onde é possível
              acompanhá-los.
            </p>
            <Button text="Ver mais" route="/lineups" />
          </div>
          <div className={styles.contentBox}>
            <h2>Staff e Membros da org</h2>
            <p>
              A Viking também é composta por pessoas dedicadas a tornar a
              instituição um ambiente agradável, acolhedor e vitorioso para cada
              um de seus membros, um lugar cada vez mais profissional. Conheça
              quem são as pessoas que doam sua vida ao projeto!
            </p>
            <Button text="Ver mais" route="/about#staff" />
          </div>
        </section>
      </div>

      <section className={styles.partnersSection}>
        <h2>Nossos parceiros e patrocinadores</h2>
        <div className={styles.partnersLogos}>
          <a href="https://www.wayup.gg/viking-gaming" target="_blank">
            <Image
              src="/images/partners/WayUp.png"
              width={140}
              height={60}
              alt="Way Up"
            />
          </a>
          <a href="https://3p.gg/" target="_blank">
            <Image
              src="/images/partners/profitproplayer.png"
              width={140}
              height={70}
              alt="Profit Pro Player"
            />
          </a>
        </div>
      </section>
    </Layout>
  );
}
