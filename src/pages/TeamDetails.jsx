import React from "react";
import { useWindowWidth } from "../contexts/WindowWidth";
import { useTabContext } from "../contexts/TabsContext";
import TeamDetailsComp from "../components/TeamDetailsComp";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

function TeamDetails() {
  const tabs = useTabContext();
  const windowWidth = useWindowWidth();
  const { title, name } = useParams();
  return (
    <div>
      {windowWidth > 750 ? (
        <Navbar tabs={tabs} />
      ) : (
        <MobileNavbar tabs={tabs} />
      )}
      <div className="container">
        <TeamDetailsComp teamName={name} title={title} />
      </div>
      <section className="bg-dark">
        <div className="p-4">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default TeamDetails;
