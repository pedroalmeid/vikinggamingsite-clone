import Footer from "./Footer/footer";
import TopHeader from "./TopHeader/topHeader";

export default function Layout({ children }) {
  return (
    <>
      <TopHeader />
      {children}
      <Footer />
    </>
  );
}
