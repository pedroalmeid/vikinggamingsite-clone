import Head from "next/head"

import { useState } from "react";

import Layout from "../components/layout";
import NavigationMenu from "../components/NavigationMenu/navigationMenu";
import LineUp from "../components/LineUp/lineUp";
import LineUpsModalityCard from "../components/LineUpsModalityCard/lineUpsModalityCard";

import membersData from "../data/members.json";

import styles from "../styles/lineups.module.scss";

export default function LineUps() {
  const [game, setGame] = useState("");
  const [members, setMembers] = useState([]);

  function handleChangeModality(modality, event) {
    //Creating active style effect on cards
    if (event.target.tagName == "IMG") {
      var component = event.target.parentElement.parentElement;
    } else {
      var component = event.target;
    }

    const nav = Object.entries(component.parentElement.children);
    nav.map((item) => {
      console.log((item[1].style.filter = "saturate(0)"));
    });

    component.style.filter = "saturate(1)";

    //Changing the lineup members by the selected modality
    setGame(modality);

    switch (modality) {
      case "freefire":
        setMembers(membersData.freefire);
        break;
      case "wildrift":
        setMembers(membersData.wildrift);
        break;
      case "streamers":
        setMembers(membersData.streamers);
        break;
    }
  }

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>LineUps | Viking Gaming</title>
      </Head>

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

      <LineUp game={game} members={members} />
    </Layout>
  );
}
