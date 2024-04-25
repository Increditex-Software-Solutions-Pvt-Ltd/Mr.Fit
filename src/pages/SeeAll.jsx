import React from "react";
import SeeAlllComp from "../components/SeeAlllComp";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import { useWindowWidth } from "../contexts/WindowWidth";
import { useTabContext } from "../contexts/TabsContext";
import Footer from "../components/Footer";

const SeeAll = () => {
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
        <SeeAlllComp />
      </div>
      <section className="bg-dark">
        <div className="p-4">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default SeeAll;
