import Link from "next/link";
import Image from "next/image";

import styles from "./navigationmenu.module.scss";

import CLN from "classnames";

export default function NavigationMenu({ transparent }) {
  return (
    <header
      className={CLN({
        [styles.transparent]: transparent,
        [styles.filled]: !transparent,
      })}
    >
      <Link href="/">
        <a className={styles.menuItem}>Home</a>
      </Link>
      <Link href="/lineups">
        <a className={styles.menuItem}>Line-Ups</a>
      </Link>
      <Link href="/">
        <a className={styles.menuLogo}>
          <Image
            src="/images/header-logo.png"
            height={65}
            width={65}
            alt="Viking Gaming Logo"
          />
        </a>
      </Link>
      <Link href="/about">
        <a className={styles.menuItem}>Sobre</a>
      </Link>
      <Link href="/contact">
        <a className={styles.menuItem}>Contato</a>
      </Link>
    </header>
  );
}
