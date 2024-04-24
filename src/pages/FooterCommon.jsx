import React from "react";
import Footer from "../components/Footer";
import CommonhomeComp from "../components/CommonhomeComp";
import { useParams } from "react-router-dom";
import { useWindowWidth } from "../contexts/WindowWidth";
import { useTabContext } from "../contexts/TabsContext";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import FooterCommonComp from "../components/FooterCommonComp";

const FooterCommon = () => {
  const { title } = useParams();
  const tabs = useTabContext();
  const windowWidth = useWindowWidth();
  return (
    <div>
      {windowWidth > 750 ? (
        <Navbar tabs={tabs} />
      ) : (
        <MobileNavbar tabs={tabs} />
      )}
      <FooterCommonComp title={title} />

      <section className="bg-dark">
        <div className="p-4">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default FooterCommon;
