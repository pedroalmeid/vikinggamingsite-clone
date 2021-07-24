import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./navigationmenu.module.scss";

import useClassNames from "classnames";

export default function NavigationMenu({ transparent }) {
  const [menuTotal, setMenuTotal] = useState(false);
  const [mobileIcon, setMobileIcon] = useState(faBars);

  return (
    <>
      <header
        className={useClassNames(
          styles.container,
          {
            [styles.transparent]: transparent,
          },
          { [styles.mobileTotal]: menuTotal === true }
        )}
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
              src="/images/logos/header-logo.png"
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

      <FontAwesomeIcon
        icon={mobileIcon}
        size="4x"
        color="white"
        className={styles.mobileBarsMenu}
        onClick={() => {

          if (menuTotal) {
            setMenuTotal(false)
            setMobileIcon(faBars)
            document.body.style.overflow = 'initial'
          }
          
          else {
            setMenuTotal(true)
            setMobileIcon(faTimes)
            document.body.style.overflow = 'hidden'
          }
        }}
      />
    </>
  );
}
