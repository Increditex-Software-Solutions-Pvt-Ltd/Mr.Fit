import React from "react";
import NewsletterComp from "../components/NewsletterComp";
import { useWindowWidth } from "../contexts/WindowWidth";
import { useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";

const Newsletters = () => {
  const tabs = useTabContext();
  const { title } = useParams();

  const windowWidth = useWindowWidth();
  return (
    <>
      {windowWidth > 750 ? (
        <Navbar tabs={tabs} />
      ) : (
        <MobileNavbar tabs={tabs} />
      )}
      <NewsletterComp title={title} />
      <section className="bg-dark">
        <div className="p-4">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Newsletters;
