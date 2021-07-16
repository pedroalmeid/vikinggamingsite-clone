import Layout from "../components/layout";
import NavigationMenu from "../components/NavigationMenu/navigationMenu";
import MemberCard from "../components/MemberCard/memberCard";

export default function LineUps() {
  return (
    <Layout>
      <NavigationMenu />

      <MemberCard 
      nickname="IzyBjorn"
      name="Ênio"
      role="Streamer"
      />
    </Layout>
  )
}