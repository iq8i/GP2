import Header from "../Components/Header";
import HomePageBody from "../Components/HomePageBody";
import FAQsSection from "../Components/FAQsSection";
import GetInTouch from "../Components/GetInTouch";
import Footer from "../Components/Footer";
const links = [
  { item: "Home", direction: "/" },
  { item: "About us", direction: "/about" },
  { item: "Contact us", direction: "/contact" },
  { item: "Accounting Firm", direction: "/login" },
];
function HomePage() {
  return (
    <>
      <Header menuItems={links} />
      <HomePageBody />
      <FAQsSection />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default HomePage;
