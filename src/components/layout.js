import TopHeader from "./TopHeader/topHeader";
import Footer from "./Footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <TopHeader />
      {children}
      <Footer />
    </>
  );
}
