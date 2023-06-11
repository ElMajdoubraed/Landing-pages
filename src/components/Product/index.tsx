import Contact from "./Contact";
import Faq from "./Faq";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Prices from "./Prices";
import "./Product.scss";
import Video from "./Video";
export default function ProductTemplate() {
  return (
    <>
      <Header />
      <Features />
      <Prices />
      <Faq />
      <Video />
      <Contact />
      <Footer />
    </>
  );
}
