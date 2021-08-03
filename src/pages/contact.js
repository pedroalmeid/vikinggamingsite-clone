import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/layout";
import NavigationMenu from "../components/NavigationMenu/navigationMenu";
import Button from "../components/Button/button";

import styles from "../styles/contact.module.scss";

export default function Contact() {
  async function handleContact(event) {
    event.preventDefault();

    const params = {
      service_id: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAIL_USER_ID,
      accessToken: process.env.NEXT_PUBLIC_EMAIL_ACCESSTOKEN,
      template_params: {
        name: event.target.name.value,
        email: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value,
        recipient: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT,
      },
    };


    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params),
    })
      .then((res) => {
        if (res.status == 200) {
          alert(
            "Email enviado com sucesso, você receberá sua resposta em breve!"
          );
        }
      })
      .catch((err) => console.log(err));

    event.target.reset();
  }

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Contato | Viking Gaming</title>
      </Head>
      <NavigationMenu />

      <main className={styles.formContainer}>
        <h1>Entre em contato conosco</h1>
        <p>Preencha todas as informações do formulário e envie!</p>

        <form onSubmit={handleContact}>
          <div>
            <label htmlFor="name">Nome ou Empresa:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="subject">Assunto:</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="message">Mensagem:</label>
            <textarea
              name="message"
              id="message"
              rows="8"
              required
              autoComplete="off"
            ></textarea>
          </div>

          <Button text="Enviar" type="submit" />
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
