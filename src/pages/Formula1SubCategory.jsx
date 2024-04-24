import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";
import { useWindowWidth } from "../contexts/WindowWidth";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import CommonNavbar from "../components/CommonNavbar";
import Formula1Subcomp from "../components/Formula1Subcomp";

const Formula1SubCategory = () => {
  const tabs = useTabContext();
  let { title, category } = useParams();

  if (category === "Red Bull") {
    category = "Red bull racing";
  } else if (category === "VCARB") {
    category = "AlphaTauri";
  } else if (category === "Stake") {
    category = "Alfa Romeo";
  }

  const navigate = useNavigate();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });
  const subCategories = subs[0].subCategories || 0;
  const windowWidth = useWindowWidth();
  return (
    <>
      {windowWidth > 750 ? (
        <CommonNavbar
          subTabs={subs[0].subTitles}
          subCategories={subCategories}
        />
      ) : (
        <MobileCommonNavbar
          subTabs={subs[0].subTitles}
          subCategories={subCategories}
        />
      )}
      <div className="container">
        <Formula1Subcomp title={title} category={category} />
      </div>
    </>
  );
};

export default Formula1SubCategory;
