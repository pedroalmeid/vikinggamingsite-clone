import Image from "next/image";

import useClassNames from "classnames";

import styles from "./homemodalitycard.module.scss";

export default function HomeModalityCard({ modality }) {
  
  return (
    <div
      className={useClassNames(styles.card, {
        [styles.freefire]: modality == "freefire",
        [styles.valorant]: modality == "valorant",
        [styles.wildrift]: modality == "wildrift",
      })}
    >
      <Image
        src={`/images/${modality}.png`}
        alt={modality}
        width={100} 
        height={modality === "wildrift" ? 70 : 30}
      />
    </div>
  );
}
