import { Header } from "./Header";
import "./Coming-soon.scss";
import "./Animate.scss";
import Features from "./Features";
import Footer from "./Footer";

export default function ComingSoonTemplate() {
  $(document).ready(function () {
    // Count-Down
    $(function () {
      var austDay = new Date();
      austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
    });
  });
  return (
    <>
      <Header />
      <Features />
      <Footer />
    </>
  );
}
