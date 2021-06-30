import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <Image
            src="/images/logos/main-logo.png"
            width={125}
            height={125}
            alt="Viking Gaming"
          />

          <div>
            <label htmlFor="pages">Páginas</label>
            <nav id="pages">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/about">
                <a>Sobre</a>
              </Link>
              <Link href="/lineups">
                <a>Line-Ups</a>
              </Link>
              <Link href="/contact">
                <a>Contato</a>
              </Link>
            </nav>
          </div>
          <div className={styles.thirdColumn}>
            <div className={styles.subFields}>
              <label htmlFor="email">Email</label>
              <a href="mailto:contato@vikinggaming.gg" id="email">
                contato@vikinggaming.gg
              </a>
            </div>
            <div className={styles.subFields}>
              <label htmlFor="phone">Telefone</label>
              <a href="tel:+5561995544857" id="phone">
                +55 (61) 99554-4857
              </a>
            </div>
            <div className={styles.subFields}>
              <label htmlFor="address">Endereço</label>
              <p id="address">Qd 32 Lote 3 A Itapuã II Planaltina GO</p>
            </div>
          </div>
          <div className={styles.social}>
            <label htmlFor="social">Redes Sociais</label>
            <nav id="social">
              <a href="https://discord.gg/HPxKBYx" target="_blank">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
                <span>Discord</span>
              </a>
              <a
                href="https://www.instagram.com/vikinggaming.ofc/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
                <span>Instagram</span>
              </a>
              <a href="https://twitter.com/1VikingGaming?s=08" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                <span>Twitter</span>
              </a>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.simpleText}>
            © Copyright 2021 - Viking Gaming - Todos os direitos reservados
          </p>
          <p className={styles.simpleText}>
            Acesse e leia:{" "}
            <Link href="/privacy">
              <a>Política de Privacidade</a>
            </Link>
          </p>
          <p className={styles.simpleText}>
            Site desenvolvido por{" "}
            <a href="https://github.com/pedroalmeid">Pedro Almeida</a>
          </p>
        </div>
      </div>
    </div>
  );
}
