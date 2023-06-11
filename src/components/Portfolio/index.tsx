//@ts-nocheck

import "./Portfolio.scss";
import Navbar from "./Navbar";
import Header from "./Header";
import Licence from "./Licence";
import Statistics from "./Statistics";
import Gallery from "./Gallery";
import Contacts from "./Contacts";
export default function PortfolioTemplate() {
  $(window).scroll(function () {
    if ($(this).scrollTop() || 0 >= 200) {
      $("#navBar").addClass("noTransparrent");
    } else {
      $("#navBar").removeClass("noTransparrent");
    }
  });

  $(document).ready(function () {
    $("a.scroll").on("click", function (event) {
      var hash = this.hash;

      $("html, body").animate(
        { scrollTop: $(hash).offset().top - 90 },
        800,
        function () {}
      );
    });

    $(".circle")
      .circleProgress({
        startAngle: -Math.PI / 2,
        fill: "#0575e6",
      })
      .on(
        "circle-animation-progress",
        function (event: any, progress: any, stepValue: any) {
          $(this)
            .find("span")
            .html(Math.round(stepValue * 100) + "%");
        }
      );

    $(function () {
      $("#commentForm").validate();
    });
  });
  return (
    <>
      <Navbar />
      <Header />
      <Licence />
      <Statistics />
      <Gallery />
      <Contacts />
    </>
  );
}
