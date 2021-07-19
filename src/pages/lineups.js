import { useState, useEffect } from "react";

import Layout from "../components/layout";
import NavigationMenu from "../components/NavigationMenu/navigationMenu";
import LineUp from "../components/LineUp/lineUp";
import LineUpsModalityCard from "../components/LineUpsModalityCard/lineUpsModalityCard";

import styles from "../styles/lineups.module.scss";

export default function LineUps() {
  const [game, setGame] = useState("");

  function handleChangeModality(modality, event) {

    //Creating active style effect on cards
    if (event.target.tagName == "IMG") {
      var component = event.target.parentElement.parentElement;
    } else {
      var component = event.target;
    }

    const nav = Object.entries(component.parentElement.children)
    nav.map(item => {
      console.log(item[1].style.filter = 'saturate(0)')
    })

    component.style.filter = 'saturate(1)'

    setGame(modality);
  }

  return (
    <Layout>
      <NavigationMenu />

      <nav className={styles.modalityChoicer}>
        <LineUpsModalityCard
          modality="freefire"
          clickFunction={handleChangeModality}
        />
        <LineUpsModalityCard
          modality="wildrift"
          clickFunction={handleChangeModality}
        />
        <LineUpsModalityCard
          modality="streamers"
          clickFunction={handleChangeModality}
        />
      </nav>

      <LineUp game={game} members={[]} />
    </Layout>
  );
}
