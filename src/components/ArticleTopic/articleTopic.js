import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./articletopic.module.scss";

export default function ArticleTopic(props) {
  return (
    <div>
      <div className={styles.header}>
        <FontAwesomeIcon icon={props.icon} color="#0AFE6B" size="2x" />
        <h3>{props.title}</h3>
      </div>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}
