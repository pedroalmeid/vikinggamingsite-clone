import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/layout";
import NavigationMenu from "../components/NavigationMenu/navigationMenu";
import Button from "../components/Button/button"

import styles from "../styles/contact.module.scss";

export default function Contact() {
  return (
    <Layout>
      <NavigationMenu />

      <main className={styles.formContainer}>
        <h1>Entre em contato conosco</h1>
        <p>Preencha todas as informações do formulário e envie!</p>

        <form>
          <div>
            <label htmlFor="name">Nome ou Empresa:</label>
            <input type="text" name="name" id="name" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="topic">Assunto:</label>
            <input type="text" name="topic" id="topic" />
          </div>

          <div>
            <label htmlFor="message">Mensagem:</label>
            <textarea name="message" id="message" rows="8"></textarea>
          </div>

          <Button text="Enviar"/>
        </form>
      </main>

      <section className={styles.socialsSection}>
        <div>
          <h2>Nossas redes sociais</h2>
          <nav>
            <a href="https://discord.gg/HPxKBYx" target="_blank">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
              Discord
            </a>
            <a
              href="https://www.instagram.com/vikinggaming.ofc/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
              Instagram
            </a>
            <a href="https://twitter.com/1VikingGaming?s=08" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              Twitter
            </a>
          </nav>
        </div>
      </section>
    </Layout>
  );
}
