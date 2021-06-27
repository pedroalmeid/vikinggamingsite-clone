import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import styles from "./topheader.module.scss";

export default function TopHeader() {
  return (
    <a href="https://www.wayup.gg/viking-gaming" target="_blank">
      <div className={styles.container}>
        <FontAwesomeIcon icon={faTshirt} />
        <p className={styles.description}>
          Clique aqui e confira os produtos da <strong>Viking Gaming</strong>
        </p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </a>
  );
}
