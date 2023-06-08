//@ts-nocheck
import "./Agency.scss";
import Contact from "./Contact";
import { Footer } from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Navbar from "./Navbar";
import Services from "./Services";
import Statistics from "./Statistics";
import $ from "jquery";
export default function AgencyTemplate() {
  $(window).scroll(function () {
    if (($(this).scrollTop() as any) >= 500) {
      $("#navBar").addClass("noTransparrent");
    } else {
      $("#navBar").removeClass("noTransparrent");
    }
  });

  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Gallery />
      <Statistics />
      <Contact />
      <Footer />
    </>
  );
}
