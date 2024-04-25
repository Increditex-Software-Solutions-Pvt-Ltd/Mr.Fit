import React from "react";
import AllNewsComp from "../components/AllNewsComp";
import Navbar from "../components/Navbar";
import { useTabContext } from "../contexts/TabsContext";
import { useWindowWidth } from "../contexts/WindowWidth";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";

const AllNews = () => {
  const tabs = useTabContext();
  const windowWidth = useWindowWidth();
  return (
    <div>
      {windowWidth > 750 ? (
        <Navbar tabs={tabs} />
      ) : (
        <MobileNavbar tabs={tabs} />
      )}
      <div className="container">
        <AllNewsComp />
      </div>
      <section className="bg-dark">
        <div className="p-4">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default AllNews;
