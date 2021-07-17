import styles from "./lineup.module.scss";

export default function LineUp(props) {
  return (
    <main className={styles.container}>
      <span>{props.gameClass}</span>
      <h2>{props.game}</h2>

      <div></div>
    </main>
  );
}
