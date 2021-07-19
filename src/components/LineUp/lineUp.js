import styles from "./lineup.module.scss";

export default function LineUp(props) {
  return (
    <main className={styles.container}>
      <h2>{props.game}</h2>

      <div></div>
    </main>
  );
}
