import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./membercard.module.scss";

export default function MemberCard(props) {
  const socialIcons = props.social.map((item) => {
    if (item.icon == "instagram") {
      return (
        <a href={item.url} target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      );
    } else if (item.icon == "twitter") {
      return (
        <a href={item.url} target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      );
    } else if (item.icon == "twitch") {
      return (
        <a href={item.url} target="_blank">
          <FontAwesomeIcon icon={faTwitch} />
        </a>
      );
    }
  });

  return (
    <div className={styles.card}>
      <Image
        src={`/images/members/${props.nickname}.png`}
        width={215}
        height={260}
        alt={props.nickname}
        className={styles.photo}
      />
      <div className={styles.content}>
        <span>{props.nickname}</span>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.role}>{props.role}</p>
        <div className={styles.social}>{socialIcons}</div>
      </div>
    </div>
  );
}
