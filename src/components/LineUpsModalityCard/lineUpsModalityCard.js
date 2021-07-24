import Image from "next/image";

import useClassNames from "classnames";

import styles from "./lineupsmodalitycard.module.scss";

export default function lineUpsModalityCard({ modality, clickFunction }) {
  return (
    <div
      id={modality}
      onClick={(event) => clickFunction(modality, event)}
      className={useClassNames(styles.modalityCard, {
        [styles.freefire]: modality == "freefire",
        [styles.streamers]: modality == "streamers",
        [styles.wildrift]: modality == "wildrift",
      })}
    >
      <Image
        src={`/images/games/${modality}.png`}
        width={100}
        height={modality === "wildrift" ? 70 : 30}
        alt={modality}
      />
    </div>
  );
}
