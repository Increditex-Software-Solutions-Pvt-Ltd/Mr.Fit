import React from "react";
import HeadlineNews from "../components/HeadlineNews";
import { useWindowWidth } from "../contexts/WindowWidth";
import { useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";
import CommonNavbar from "../components/CommonNavbar";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import Footer from "../components/Footer";

function Headlines() {
  const headlineData = {
    title:
      "Arsenal, Liverpool and Man City: Every Premier League title-race fixture analysed",
    description:
      "The Premier League is a European outlier this season Everywhere you look around the continent, title races have become virtual processions. Paris Saint-Germain, Bayer Leverkusen and PSV Eindhoven are each 10 points clear in Ligue 1, the Bundesliga and Eredivisie, Real Madrid lead by seven in La Liga and, in Italy, Inter Milan are a mammoth 16 points ahead of city rivals AC Milan.In England, however, things are a whole lot tighter. With 10 games remaining, just a point separates table-topping Arsenal from third-placed Manchester City, with Liverpool sandwiched in between. Since the league was launched in 1992, there has not been a season like it.",
    imageUrl:
      "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/11131832/11_03_Title-1024x683.jpg",
    author: "John Doe",
    publishDate: "2024-03-08",
  };
  const { title } = useParams();
  const tabs = useTabContext();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });

  const windowWidth = useWindowWidth();
  return (
    <div>
      {windowWidth > 750 ? (
        <CommonNavbar subTabs={subs[0].subTitles} />
      ) : (
        <MobileCommonNavbar subTabs={subs[0].subTitles} />
      )}
      <div className="container">
        <HeadlineNews headline={headlineData} />
      </div>
      <section className="bg-dark">
        <div className="p-4">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Headlines;
