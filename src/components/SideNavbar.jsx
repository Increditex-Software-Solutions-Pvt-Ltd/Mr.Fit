import React from "react";
import { useTabContext } from "../contexts/TabsContext";

function SideNavbar() {
  const tabs = useTabContext();
  return (
    <div>
      <ul>
        {tabs.map((tab) => {
          return <li>{tab.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default SideNavbar;
