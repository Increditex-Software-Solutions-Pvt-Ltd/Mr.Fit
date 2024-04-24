import React from "react";
import { useTabContext } from "../contexts/TabsContext";
import Navbar from "../components/Navbar";
import { useWindowWidth } from "../contexts/WindowWidth";
import MobileNavbar from "../components/MobileNavbar";
import LiveNewsComp from "../components/LiveNewsComp";
import Footer from "../components/Footer";

function LiveNews() {
  const tabs = useTabContext();
  const windowWidth = useWindowWidth();

  const dummyNews = [
    {
      headline:
        "Premier League live scores and news: Latest Manchester United, Arsenal updates and more",
      description:
        "Follow the latest news from the Premier League, MLS, WSL and across Europe",
      image:
        "https://cdn-media.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn-media.theathletic.com/skGcGH2g7Pan_UpJ4rHRP0oAh_1440x960.jpg",
      authorProfilePic:
        "https://cdn.theathletic.com/cdn-cgi/image/width=48%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/01/09115525/Headshot..jpeg",
      authorName: "Nnamdi Onyeagwara",
      publishDateTime: "9 March 2024 at 4:17 pm GMT+5:30",
    },
    {
      headline:
        "Liverpool’s 1,000 goals under Klopp: The complete breakdown – plus our favourites",
      description:
        "Follow the latest news from the Premier League, MLS, WSL and across Europe",
      image:
        "https://cdn.theathletic.com/cdn-cgi/image/width=600%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/02062529/0303_Klopp1000-scaled.jpg",
      authorProfilePic:
        "https://cdn.theathletic.com/cdn-cgi/image/width=48%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/01/09115525/Headshot..jpeg",
      authorName: "Jonas Seagel",
      publishDateTime: "8 March 2024 at 2:19 pm GMT+5:30",
    },

    // Add more dummy news objects here
  ];

  https: return (
    <div>
      {windowWidth > 750 ? (
        <Navbar tabs={tabs} />
      ) : (
        <MobileNavbar tabs={tabs} />
      )}
      <div className="container pt-5">
        <h6 style={{ fontWeight: 400, color: "red" }}>
          <span
            style={{ backgroundColor: "red", color: "white" }}
            className="px-3 py-1"
          >
            Live
          </span>
          <small className="text-md ms-2 fw-bold">updated 1m ago</small>
        </h6>
        <hr />
        <LiveNewsComp news={dummyNews} />
      </div>
      <section className="bg-dark">
        <div className="p-4">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default LiveNews;
