import { useState } from "react";

import Layout from "../components/layout";
import NavigationMenu from "../components/NavigationMenu/navigationMenu";
import LineUp from "../components/LineUp/lineUp";
import LineUpsModalityCard from "../components/LineUpsModalityCard/lineUpsModalityCard";

import {
  faInstagram,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/lineups.module.scss";

export default function LineUps() {
  //DATA
  const membersData = {
    staff: [
      {
        nickname: "IzyBjorn",
        name: "Izânio Paulino de Araujo Cabral",
        role: "Fundador",
        social: [
          { icon: faInstagram, url: "https://www.instagram.com/izybjorn/" },
          { icon: faTwitter, url: "https://twitter.com/IzyBjorn" },
          { icon: faTwitch, url: "https://www.twitch.tv/izybjorn" },
        ],
      },
      {
        nickname: "EnyGirll",
        name: "Italla Eny de Araujo Cabral",
        role: "Co Fundadora e CEO",
        social: [
          { icon: faInstagram, url: "https://www.instagram.com/itallaeny/" },
          { icon: faTwitter, url: "https://twitter.com/itallaeny" },
        ],
      },
      {
        nickname: "Débora Vargas",
        name: "Débora Vargas Fernandes",
        role: "Psicóloga",
        social: [
          { icon: faInstagram, url: "https://www.instagram.com/psideboravf/" },
          { icon: faTwitter, url: "https://twitter.com/psideboravf" },
        ],
      },
    ],
    wildrift: [
      {
        nickname: "Zamboltt",
        name: "Matheus Zambotto",
        role: "Player",
        social: [
          { icon: faInstagram, url: "https://www.instagram.com/vkg_zamboltt/" },
        ],
      },
      {
        nickname: "Zeramist",
        name: "Kéven Lucero Mirapalheta",
        role: "Player",
        social: [
          { icon: faInstagram, url: "https://www.instagram.com/vkg_zeramist/" },
        ],
      },
      {
        nickname: "Breno",
        name: "Breno Araújo da Silva Nascimento",
        role: "Player",
        social: [
          { icon: faInstagram, url: "https://www.instagram.com/vkg_breno/" },
        ],
      },
      {
        nickname: "Dluz",
        name: "Gustavo Kauã Rachel da Luz",
        role: "Player",
        social: [
          { icon: faInstagram, url: "https://www.instagram.com/vkg_dluz/" },
        ],
      },
      {
        nickname: "Guiga",
        name: "Guilherme de Oliveira Fernandes",
        role: "Player",
        social: [
          { icon: faInstagram, url: "https://www.instagram.com/vkg_guiga/" },
        ],
      },
    ],
    freefire: [
      {
        nickname: "Scollta",
        name: "Paulo Henrique Menezes",
        role: "Líder da Guilda",
        social: [
          { icon: faInstagram, url: "https://www.instagram.com/paulo_gym/" },
        ],
      },
      {
        nickname: "Loira",
        name: "Marie Freitas",
        role: "Vice Líder",
        social: [
          {
            icon: faInstagram,
            url: "https://www.instagram.com/mariefreitasr/",
          },
        ],
      },
    ],
    streamers: [
      {
        nickname: "IzyBjorn",
        name: "Izânio Paulino de Araujo Cabral",
        role: "Twitch Streamer",
        social: [
          { icon: faTwitch, url: "https://www.twitch.tv/izybjorn" },
          { icon: faInstagram, url: "https://www.instagram.com/izybjorn/" },
          { icon: faTwitter, url: "https://twitter.com/IzyBjorn" },
        ],
      },
    ],
  };
  //
  
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
