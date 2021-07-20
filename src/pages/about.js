import Image from "next/image";

import styles from "../styles/about.module.scss";

import NavigationMenu from "../components/NavigationMenu/navigationMenu";
import Layout from "../components/layout";
import ArticleTopic from "../components/ArticleTopic/articleTopic";
import MemberCard from "../components/MemberCard/memberCard";

import membersData from "../data/members.json";

import {
  faBookOpen,
  faLightbulb,
  faBalanceScale,
  faBullseye,
  faBriefcase,
  faBrain,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <Layout>
      <NavigationMenu />

      <div className={styles.pageContent}>
        <section className={styles.wordingSection}>
          <article>
            <h1>Sobre</h1>
            <div className={styles.topics}>
              <ArticleTopic
                icon={faBookOpen}
                title="A História"
                text="A Viking é uma Organização de Esportes Eletronicos fundada em Novembro de 2019, por Italla Eny
              “Eny” e Izânio Cabral “IzyBjorn”. A iniciativa em ter uma equipe de e-sports surgiu após uma conduta
              não profissional da equipe que Izy era contratado como proplayer. Sabendo que o que sofreu era
              errado e que isso estava virando regra no cenário, o melhor a fazer seria ter sua própria equipe e
              provar que é possível fazer melhor."
              />

              <ArticleTopic
                icon={faLightbulb}
                title="Por que “Viking” Gaming?"
                text="Somos fãs da série Vikings e com ela aprendemos alguns valores que levamos no dia dia.
              A forma desse povo se arriscar no incerto, ser ambiciosos, focados e determinados, sem medo de se dedicar
              no que querem conquistar nos motiva a fazer o mesmo em nossa Organização."
              />

              <ArticleTopic
                icon={faBalanceScale}
                title="Missão e Comprometimento"
                text="A Viking foi criada para contribuir com o desenvolvimento profissional de todos aqueles que acreditam
              no potencial dos esportes eletrônicos. E nosso comprometimento para com os atletas é sempre preservar vossa integridade e reputação, além de fornecer a base necessária para seus sucessos e para o de nossa empresa."
              />

              <ArticleTopic
                icon={faBullseye}
                title="Nossos Objetivos"
                text="Tornar o time uma potência nacional e um dos principais do Brasil até 2030, prezando e transmitindo
              os valores de um time de e-sports que se desenvolveu desde o princípio com os melhores padrões de
              conduta possíveis."
              />
            </div>
          </article>

          <Image
            src="/images/haven.jpg"
            width={465}
            height={1288}
            alt="Corvo de Odin"
          />
        </section>

        <section className={styles.virtues}>
          <h2>Nossos principais valores</h2>
          <div className={styles.cards}>
            <div className={styles.virtueCard}>
              <span>Respeito</span>
              <p>
                Nunca subestimar ou desrespeitar nossos colegas ou adversários,
                todos são capazes e todos tem potencial, a competição deve ser
                saudável.
              </p>
            </div>
            <div className={styles.virtueCard}>
              <span>Honestidade</span>
              <p>
                Sempre trabalhar em conformidade com as regras públicas e
                privadas, levando a transparência acima de tudo.
              </p>
            </div>
            <div className={styles.virtueCard}>
              <span>Humildade</span>
              <p>
                Sempre saber reconhecer nossas falhas e estar prontos e
                dispostos a corrigi-las da melhor forma possível.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.staff}>
          <h2>Os membros da staff</h2>
          <div className={styles.membersArea}>
            {membersData.staff.map((member) => {
              return (
                <MemberCard
                  nickname={member.nickname}
                  name={member.name}
                  role={member.role}
                  social={member.social}
                />
              );
            })}
          </div>
        </section>

        <section className={styles.wordingSection}>
          <Image
            src="/images/viking-woman.jpg"
            width={465}
            height={795}
            alt="Guerreira Viking"
          />

          <div className={styles.topics}>
            <ArticleTopic
              icon={faBriefcase}
              title="Profissionalização"
              text="Não é porque começamos sem investimento que os nossos valores seriam deixados para depois. Já
              contamos com depósito para registro de marca, contratos formalmente assinados com os proplayers,
              coachs e streamers, pessoa jurídica constituída e treinamentos constantes de profissionalização para todos nossos membros. Tudo com o apoio de assessoria especializada da Profit Pro
              Player. Nossa visão não nos permitiria deixar isso para depois e com o apoio da iniciativa privada
              sabemos que essa base será responsável pelo sucesso futuro."
            />

            <ArticleTopic
              icon={faBrain}
              title="Acompanhamento Psicológico"
              text="Nossos proplayers contam com acompanhamento psicológico e apoio emocional, necessidade eminente entre todos os atletas, que
              enfrentam todas as adversidades de suas vidas privadas para encarar a profissão que ainda é
              alvo de muito preconceito derivado da ignorância. Para isso, contamos com a Drª Débora Vargas Fernandes - Psicóloga CRP 03/22548, que nos acompanha semanalmente, pré e pós campeonatos, realizando sessões
              com os atletas."
            />

            <ArticleTopic
              icon={faBullhorn}
              title="Alcance"
              text="Atualmente, A Viking Gaming possui uma audiência e influência para mais de 200 mil seguidores nas redes sociais, totalizados a partir todos os números de nossos
              membros e atletas."
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
