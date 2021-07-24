import MemberCard from "../MemberCard/memberCard";

import styles from "./lineup.module.scss";

export default function LineUp({ game, members }) {
  return (
    <main className={styles.container}>
      <h2>{game}</h2>

      <div className={styles.membersArea}>
        {members.map((member) => {
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
    </main>
  );
}
