import React from "react";
import Navbar from "../components/Navbar";
import Topnews from "../components/Topnews";

import { useTabContext } from "../contexts/TabsContext";

 const Homepage = () => {
  const tabs = useTabContext();
  return (
    <>
      <Navbar tabs={tabs} />
      <div className="bg-dark d-flex align-items-center justify-content-center flex-column">
        <h2 className="mainheading">
          Access sports reporting that sets the standard.
        </h2>
        <a href="" className="text-bg text-white mb-4 subscribeanchor fw-bold">
          SUBSCRIBE FOR $2 <i className="bi bi-chevron-right"></i>
        </a>
      </div>
      <Topnews />
    </>
  );
};

export default Homepage;