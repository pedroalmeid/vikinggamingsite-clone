import Layout from "../components/layout";
import NavigationMenu from "../components/NavigationMenu/navigationMenu";
import LineUp from "../components/LineUp/lineUp";
import LineUpsModalityCard from "../components/LineUpsModalityCard/lineUpsModalityCard";

import styles from "../styles/lineups.module.scss";

export default function LineUps() {
  return (
    <Layout>
      <NavigationMenu />

      <nav className={styles.modalityChoicer}>
        <LineUpsModalityCard modality="freefire" inactive/>
        <LineUpsModalityCard modality="wildrift" inactive />
        <LineUpsModalityCard modality="streamers" inactive />
      </nav>

      <LineUp gameClass="Mobile MOBA Game" game="Wild Rift" members={[]} />
    </Layout>
  );
}
