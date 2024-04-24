import React, { useEffect, useState } from "react";
import CommonNavbar from "../components/CommonNavbar";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import { useWindowWidth } from "../contexts/WindowWidth";
import { useTabContext } from "../contexts/TabsContext";
import { useNavigate, useParams } from "react-router-dom";
import PicksComp from "../components/PicksComp";
import OddsComp from "../components/OddsComp";
import Footer from "../components/Footer";

const OddsPicks = () => {
  const tabs = useTabContext();
  const { title, sort } = useParams();
  const navigate = useNavigate();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });

  const windowWidth = useWindowWidth();

  const [active, setActive] = useState(sort);

  const handleActiveTab = (tabId) => {
    setActive(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setActive(sort);
    setSelectedValue(title);
  }, [sort, title]);

  const [selectedValue, setSelectedValue] = useState(title); // Example initial selected value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    navigate(`/category/sub/OddsPicks/${event.target.value}/${active}`);
  };
  return (
    <div>
      <>
        {windowWidth > 750 ? (
          <CommonNavbar subTabs={subs[0].subTitles} />
        ) : (
          <MobileCommonNavbar subTabs={subs[0].subTitles} />
        )}
        <div className="container">
          <section className="m-3 border-bottom">
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="d-flex align-items-center">
                <h3 className="me-2">
                  <b>
                    {selectedValue} {active}{" "}
                  </b>
                </h3>
                {active === "Odds" ? (
                  <small className="mb-2">
                    <b>
                      Powered by{" "}
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA5MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyLjU2NTQgNy4xMjAxMkMzMy4wMjMzIDcuMTIwMDQgMzMuNDgwNCA3LjE1ODg5IDMzLjkzMTcgNy4yMzYyNUMzNC4yOTM2IDcuMzAzMTEgMzQuNjQwMSA3LjQzNTg3IDM0Ljk1NDEgNy42Mjc5MUMzNS4yNDQ1IDcuODExNTggMzUuNDg2NiA4LjA2MjI1IDM1LjY2IDguMzU4ODZDMzUuODA3NCA4LjY0NTE5IDM1Ljg5NTggOC45NTgxOCAzNS45MjAxIDkuMjc5MzFDMzUuOTQ0NCA5LjYwMDQzIDM1LjkwMzkgOS45MjMxNiAzNS44MDEyIDEwLjIyODRDMzUuNjMyMiAxMC42OTg0IDM1LjMxMTggMTEuMDk4OSAzNC44OTAzIDExLjM2NjlDMzQuNjc3NCAxMS41MDM1IDM0LjQ0MTIgMTEuNiAzNC4xOTM1IDExLjY1MTZMMzQuMDM4NyAxMS42Nzg5QzM0LjY4MDggMTEuNzU4NiAzNS4zNTAzIDEyLjAxMzYgMzUuNzMyOSAxMi40NDRDMzYuMTE5OCAxMi44ODMxIDM2LjMyNSAxMy40NTMgMzYuMzA2NyAxNC4wMzhDMzYuMzA1NyAxNC4yMTcgMzYuMjkyOCAxNC4zOTU4IDM2LjI2OCAxNC41NzMxQzM2LjIzMzkgMTQuNzc3NiAzNi4xNzUgMTQuOTc3MiAzNi4wOTI2IDE1LjE2NzRDMzUuOTk4OCAxNS4zODQgMzUuODc2MyAxNS41ODcgMzUuNzI4MyAxNS43NzA5QzM1LjU1MTIgMTUuOTg0NSAzNS4zMzQ3IDE2LjE2MjMgMzUuMDkwNyAxNi4yOTQ2QzM0Ljc4MTEgMTYuNDU4NyAzNC40NTExIDE2LjU4MTMgMzQuMTA5MyAxNi42NTg5QzMzLjYwMDIgMTYuNzU5NCAzMy4wODIgMTYuODA2OCAzMi41NjMxIDE2LjgwMDFIMjguMTg2NVY3LjEyMDEySDMyLjU2NTRaTTMyLjU2NTQgMTEuMzU3OEMzMi45MDE2IDExLjM2NDUgMzMuMjM2OSAxMS4zMjE2IDMzLjU2MDUgMTEuMjMwM0MzMy44MTMyIDExLjE1NzYgMzQuMDUwMiAxMS4wMzg3IDM0LjI1OTYgMTAuODc5NkMzNC40MzkgMTAuNzQxIDM0LjU4MjcgMTAuNTYxNCAzNC42Nzg2IDEwLjM1NTlDMzQuNzcyOCAxMC4xNTc0IDM0LjgyMSA5Ljk0MDI3IDM0LjgxOTcgOS43MjA1OEMzNC44MTk3IDguODA5NzMgMzQuMDY4MyA4LjA2MDU2IDMyLjU2NTQgOC4wNjA1NkgyOS4yOTA5VjExLjM1NzhIMzIuNTY1NFpNMzIuNTY1NCAxNi4wMDA4QzMyLjkwMzcgMTYuMDAzMiAzMy4yNDE1IDE1Ljk3MzUgMzMuNTc0MiAxNS45MTJDMzMuODcyMiAxNS44NjIxIDM0LjE1NzYgMTUuNzU0NiAzNC40MTQ0IDE1LjU5NTVDMzQuNjU1NiAxNS40NDI2IDM0Ljg1MzIgMTUuMjMwMSAzNC45ODgzIDE0Ljk3ODRDMzUuMTM4OCAxNC42Nzg3IDM1LjIxMDkgMTQuMzQ1OCAzNS4xOTc3IDE0LjAxMDdDMzUuMjE0NyAxMy43Mzg3IDM1LjE2MDYgMTMuNDY3MSAzNS4wNDA4IDEzLjIyMjNDMzQuOTIxMSAxMi45Nzc2IDM0LjczOTcgMTIuNzY4MyAzNC41MTQ2IDEyLjYxNDhDMzQuMDU5MiAxMi4zMDk3IDMzLjQxMjUgMTIuMzAyOCAzMi41NjA5IDEyLjMwMjhIMjkuMjkwOVYxNi4wMDA4SDMyLjU2NTRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNDQuNTQ3MyA3LjEzMTg0VjguMDcwMDFIMzguOTUwMVYxMS4zNDQ1SDQzLjg3NTVWMTIuMzQ0MUgzOC45NTAxVjE1Ljg1MzJINDQuNjE1NlYxNi44MjU1SDM3Ljg4NjdWNy4xMzE4NEg0NC41NDczWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTUzLjM0NjUgNy4xMjAxMlY4LjA2MDU2SDQ5Ljk3NjRWMTYuNzg2NUg0OC45MDM5VjguMDYwNTZINDUuMzkyNlY3LjEyMDEySDUzLjM0NjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNTQuMzY0MyA3LjExOTM4SDU2LjY5MzdMNTkuOTI3MiAxMi41OTEzTDYzLjI4MzcgNy4xMTkzOEg2NS40ODc5TDY1LjY2MzMgMTYuNzgzNEg2Mi45ODMxVjExLjgxMjVMNjAuNTI2MSAxNS45NDc3SDU5LjMyMzhMNTYuODQ0IDExLjc4OTdWMTYuNzgzNEg1NC4zNjQzVjcuMTE5MzhaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNzguMDc4MSA3LjExOTM4SDgwLjQwNzZMODMuNjQxMSAxMi41OTEzTDg2Ljk5NzYgNy4xMTkzOEg4OS4yMDE4TDg5LjM3NzEgMTYuNzgzNEg4Ni42OTdWMTEuODEyNUw4NC4yNCAxNS45NDc3SDgzLjAzNzdMODAuNTU3OSAxMS43ODk3VjE2Ljc4MzRINzguMDc4MVY3LjExOTM4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTc0Ljg2MDMgMTAuMjEyNEw3Ni42MTM2IDguNzI1NDZWOC40OTc3NUM3NS40NjY2IDcuNDUzMzQgNzMuOTc3MiA2Ljg2NDU0IDcyLjQyNiA2Ljg0MjI5QzY5Ljg5MzkgNi44NTM2NyA2Ny4wMDg4IDguMTk3MTcgNjcuMDA4OCAxMi4wMTEzQzY3LjAwODggMTUuODI1NSA3MC40MjQ1IDE3LjA1MjkgNzIuMjczNSAxNy4wNTI5Qzc0LjEyMjUgMTcuMDUyOSA3Ni4zNzIzIDE1Ljc0ODEgNzYuMzcyMyAxNS43NDgxVjExLjczMzVINzMuOTU4NVYxNC4yNjU3QzczLjk1ODUgMTQuMjY1NyA3My40ODI2IDE0LjYxNDEgNzIuNDgwNyAxNC42MTQxQzcxLjQ3ODggMTQuNjE0MSA2OS43OTgzIDE0LjA2MyA2OS43OTgzIDExLjk0NTNDNjkuNzk4MyA5LjgyNzU4IDcxLjkyOTYgOC4wMjg2NiA3NC44NjAzIDEwLjIxMjRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTIuMDExNyAwSDI0LjAwNzVWMjMuOTkzOUgxMi4wMTE3QzEyLjAxMTcgMjMuOTkzOSAxOC4wMDc0IDE5LjU0OSAxOC4wMDc0IDExLjk5ODFDMTguMDA3NCA0LjQ0NzIgMTIuMDExNyAwIDEyLjAxMTcgMFoiIGZpbGw9IiNCNUExNjkiLz4KPHBhdGggZD0iTTEzLjg0NTQgMjAuMDU2NUMxMy44NDU0IDIwLjA1NjUgMTYuNTI3OSAxOC4zOTE5IDE2LjUyNzkgMTEuODIyNEMxNi41Mjc5IDUuMjUyOTcgMTIuMzA2MSAyLjMxMzIyIDEwLjYwNzQgMi4yNTg1N0M4LjkwODY0IDIuMjAzOTIgNy43MTU0MyAyLjkxMjEgNy4xNDE2IDMuOTAyNjVDNy4xNDE2IDMuOTAyNjUgOC44MDg0NSA0LjgxMzQ5IDkuNTY0NDUgNS42OTkyOUM5LjYwOTA4IDUuOTA5NDggOS42MDkwOCA2LjEyNjY5IDkuNTY0NDUgNi4zMzY4OEM5LjU2NDQ1IDYuMzM2ODggOS41MDUyNCA2LjU3ODI1IDkuMzA5NDEgNi40MDc0N0M5LjExMzU4IDYuMjM2NjkgOC41NjkzNSA1LjUzMzA2IDguMzU5ODYgNS41NjAzOUM4LjE1MDM2IDUuNTg3NzEgOC4wNzA2NiA1LjYzMDk4IDguMTYxNzUgNS43Njk4OEM4LjMyMTkgNi4wMTcwNCA4LjU0MTAxIDYuMjIwNDkgOC43OTkzNCA2LjM2MTkzQzkuMDQ5ODIgNi40NTMwMSAxMC4wMzgxIDYuNzMzMSAxMC4zMTgyIDYuNzkwMDNDMTAuNTk4MyA2Ljg0Njk1IDEwLjY5ODQgNy40MDQ4NSAxMC44ODUyIDcuNDczMTZDMTEuMDcxOSA3LjU0MTQ3IDExLjIzMzYgNy40NTAzOSAxMS40MDg5IDcuNDczMTZDMTEuNTg0MiA3LjQ5NTkzIDExLjg2NDMgNy45NDY4IDExLjg5NjIgOC4xNjk5NUMxMS45MjgxIDguMzkzMTEgMTEuNDQwOCA4LjY4MDAzIDExLjIxMzEgOC43MzY5NkMxMC43NDg0IDguNzg5MzggMTAuMjc4OCA4Ljc3Nzg5IDkuODE3MjEgOC43MDI4QzkuMzg5MTEgOC42MzIyMSA4Ljk2MTAxIDguNzAyOCA5LjA4ODUzIDguNzQ4MzRDOS4yMTYwNSA4Ljc5Mzg4IDEwLjc1NzcgOS4yNzIwOCAxMS4wMjE4IDkuNDQ3NDFDMTEuMjg1OSA5LjYyMjc1IDExLjQ3NzIgOS43MjI5NCAxMS42NzA4IDkuNTI5MzlDMTEuODY0MyA5LjMzNTg0IDEyLjA3NjEgOC43MDUwOCAxMi4xOTQ1IDguNjgyM0MxMi4zMDc0IDguNjY4MDggMTIuNDIyIDguNjg4MDIgMTIuNTIzNSA4LjczOTU3QzEyLjYyNSA4Ljc5MTEyIDEyLjcwODcgOC44NzE5MSAxMi43NjM4IDguOTcxNUMxMi45MjU0IDkuMzY4MjggMTIuOTk2MiA5Ljc5NjIxIDEyLjk3MSAxMC4yMjM5QzEyLjk0ODIgMTAuNjM2MSAxNC43MTk4IDEyLjAxMTQgMTQuNzkyNyAxNC42NTA2QzE0Ljg2NTYgMTcuMjg5OCAxNC4yMjU3IDE5LjMzNjkgMTMuODQ1NCAyMC4wNTY1WiIgZmlsbD0iI0I1QTE2OSIvPgo8cGF0aCBkPSJNMTIuNTgyNyAxMS4xNTgxQzEyLjU4MjcgMTEuMTU4MSAxMS42Mzk5IDExLjI4MzQgMTEuNDQ0MSAxMC45MzA0QzExLjA4MjkgMTEuMjYzNSAxMC42NzY2IDExLjU0NCAxMC4yMzcyIDExLjc2MzhDOS43ODg2IDExLjk5NDIgOS4zODQ1NiAxMi4zMDI3IDkuMDQ0MDMgMTIuNjc0N0M4LjY3MzE4IDEyLjc3NDUgOC4yODAyNiAxMi43NTQ2IDcuOTIxNDEgMTIuNjE3OEM3LjU2NDUyIDEyLjQ2NjkgNy4xOTY4OSAxMi4zNDI5IDYuODIxNTcgMTIuMjQ2NkM2Ljc4NzQ4IDEyLjE1MjQgNi43ODc0OCAxMi4wNDkzIDYuODIxNTcgMTEuOTU1MUM2LjgyMTU3IDExLjk1NTEgNi4yNDA5MSAxMi4zMjg2IDYuMDkwNjIgMTIuODI5NUM1Ljk0MDMzIDEzLjMzMDUgNS45MDYxNyAxNC43NDkxIDUuNzkwMDQgMTQuOTk1MUM1Ljc5MDA0IDE0Ljk5NTEgNS45NTE3MSAxNS44Mzk5IDYuNTQxNDkgMTYuMjE1NkM3LjEzMTI2IDE2LjU5MTMgNy43ODAyMyAxNy4xNTYgOC4xOTkyMiAxNy4zNTQyQzguNzY0OTQgMTcuNDYwNyA5LjM0NzU0IDE3LjQzNjYgOS45MDI1IDE3LjI4MzZDMTAuNjg4MSAxNy4wMTcxIDExLjYwODEgMTYuNjQ2IDExLjc0NDcgMTYuNjAwNEMxMS44ODEzIDE2LjU1NDkgMTIuMTcyOCAxNi45NzE2IDEyLjEyNzIgMTcuMDc4NkMxMS43MzkzIDE3Ljc3NjkgMTEuMTEyOCAxOC4zMTIxIDEwLjM2MjUgMTguNTg2MUM5LjI1NTggMTguOTM0NSA4LjU5MzE2IDE4Ljg1MDIgOC4zODgyMiAxOC43OTc4QzguMzg4MjIgMTguNzk3OCA5LjgwMDAzIDIwLjc2OTggNy43ODcwNyAyMy45OTQySDguNzM0MzRDOC43MzQzNCAyMy45OTQyIDEzLjMyMDQgMjIuMjA0NCAxMy44NzYxIDE4LjU4MzhDMTQuNDMxNyAxNC45NjMyIDE0LjM2MTEgMTMuMjgwNCAxMi41ODI3IDExLjE1ODFaTTExLjYzNzcgMTYuMTA2M0MxMS40ODA1IDE2LjMzNCAxMS40ODI4IDE2LjQ3OTcgMTAuNzA4NiAxNi42NzFDOS45MzQzOCAxNi44NjIzIDkuNjQ3NDYgMTYuODQ0MSA5LjM4Nzg3IDE3LjAxOTRDOS4xMjgyOCAxNy4xOTQ4IDguOTk2MjEgMTYuOTI2MSA4Ljk2ODg4IDE2LjczMjVDOC45NTUyIDE2LjUwMDQgOC45NTUyIDE2LjI2NzggOC45Njg4OCAxNi4wMzU3TDkuMTYyNDQgMTUuODQ0NEM5LjE2MjQ0IDE1Ljg0NDQgOS4zNTE0NCAxNi4zMTM1IDkuNjcyNTEgMTYuMjUyQzkuOTkzNTkgMTYuMTkwNSAxMC42MzggMTUuNjg3MyAxMC44NTQzIDE1LjcwNTVDMTEuMDcwNyAxNS43MjM3IDExLjEzMjEgMTUuODEwMyAxMS4yNzEgMTUuNjE5QzExLjQwOTkgMTUuNDI3NyAxMS4zODQ5IDE1LjIwOTEgMTEuNTkyMSAxNS4xNjM2QzExLjc5OTMgMTUuMTE4IDExLjc5OTMgMTUuODcxOCAxMS42NDIyIDE2LjEwNjNIMTEuNjM3N1pNMTEuNjcxOCAxMi43MThDMTEuNjcxOCAxMi43MTggMTEuNTg1MyAxMi4xMjgyIDExLjQ0NDEgMTIuMTEyMkMxMS4wMjU3IDEyLjEzODYgMTAuNjI2NyAxMi4yOTgyIDEwLjMwNTUgMTIuNTY3N0M5LjkyMjk5IDEyLjkxNjEgOS44ODY1NiAxMy4wMjMxIDkuODc5NzMgMTMuMTkzOUM5Ljg3MjkgMTMuMzY0NyA5Ljg3OTczIDEzLjY5NzEgOS43OTA5MiAxMy43NTYzQzkuNzAyMTEgMTMuODE1NSA5LjU0MDQ0IDEzLjY4OCA5LjUyMjIyIDEzLjQ3MTdDOS41MDQwMSAxMy4yNTU0IDkuNTIyMjIgMTIuNjcyNCA5LjUyMjIyIDEyLjY3MjRDOS41MjIyMiAxMi42NzI0IDEwLjg2OCAxMS40ODE1IDExLjQ3NiAxMS40NDk2QzEyLjA4NCAxMS40MTc3IDExLjk5NzQgMTIuMzUzNiAxMS42NzE4IDEyLjcxOFoiIGZpbGw9IiNCNUExNjkiLz4KPHBhdGggZD0iTTAuMDA3ODEyNSAwLjQxODk4OEMwLjAwNzgxMjUgMC40MTg5ODggMy41MTkxMiAwLjU1Nzg5MiAzLjU1MzI3IDQuMDYyMzdDMy41NTMyNyA0LjA2MjM3IDUuMjU2NTUgMy43ODIyOCA2LjA1ODEgMy44MTY0NEM2LjM1MjY2IDMuMjEyMjUgNi40ODE5MiAyLjU0MDgxIDYuNDMyNzIgMS44NzA0NUM2LjM4MzUzIDEuMjAwMDggNi4xNTc2MyAwLjU1NDcxIDUuNzc4MDEgMEwwLjAwNzgxMjUgMFYwLjQxODk4OFoiIGZpbGw9IiNCNUExNjkiLz4KPHBhdGggZD0iTTAuMDA5MTA3NzggMS4wMTE5NkMwLjAwOTEwNzc4IDEuMDExOTYgMS45Mjg3MSAxLjU5NDkgMi4zNzI3NSAyLjcxMjk2QzIuODE2NzggMy44MzEwMyAyLjMwNDQ0IDQuNTE4NzEgMS40NjE5IDUuMDA2MDJMMCA0LjY5NDA1TDAuMDA5MTA3NzggMS4wMTE5NloiIGZpbGw9IiNCNUExNjkiLz4KPHBhdGggZD0iTTEuMTI1IDkuODY4NjVDMS4xMjUgOS44Njg2NSAxLjEyNSAxMy45MzU2IDIuNTY2NDEgMTUuNTg0MkMyLjU2NjQxIDE1LjU4NDIgMi4zNzI4NiAxMy41NDg1IDIuOTk5MDYgMTIuNjAzNUMzLjU4NjcyIDExLjY2NTEgNC40MTQ1NyAxMC45MDA5IDUuMzk2ODYgMTAuMzkwMUM1LjM5Njg2IDEwLjM5MDEgMy45ODk2MSAxMC43Mzg1IDIuODQ0MjIgMTAuNDYwN0MyLjI0OTkyIDEwLjMzMTQgMS42NzI4OCAxMC4xMzI3IDEuMTI1IDkuODY4NjVaIiBmaWxsPSIjQjVBMTY5Ii8+CjxwYXRoIGQ9Ik03LjE0NTg1IDcuOTcwNTVDNi45NDU0NiA3LjQ0NjgxIDYuMjE2NzggNy44ODQwMiA1LjQ2OTg5IDcuNDc2NDJDNC43MjMgNy4wNjg4MSA0LjMzMTM0IDYuNzc3MzQgMy44MTg5OSA2Ljc3NzM0QzMuMzA2NjQgNi43NzczNCAyLjIxMTM1IDcuNzQyODQgMS43NTU5MiA4LjAyOTc1QzEuNjI1NDIgOC4xMDg3MSAxLjQ3NzE4IDguMTUzNjQgMS4zMjQ4IDguMTYwNEMxLjE3MjQxIDguMTY3MTcgMS4wMjA3NyA4LjEzNTU1IDAuODgzNzg5IDguMDY4NDZDMS4yNDgxMyA4LjYwODE0IDIuNDc3NzcgOC41MDMzOSAyLjQ3Nzc3IDguNTAzMzlDMi44NjAzMiA4Ljc0NzA0IDMuNzQ2MTIgOC4wNjg0NiA0LjExMDQ2IDcuOTExMzRDNC40NzQ3OSA3Ljc1NDIyIDUuNTcwMDkgNy43MzgyOCA2LjIwNTQgNy44MDg4N0M2Ljg0MDcxIDcuODc5NDYgNy4zNDM5NiA4LjUwNTY3IDcuMzQzOTYgOC41MDU2N0w3LjE0NTg1IDcuOTcwNTVaTTIuNTA5NjUgOC4zMjU3OEMyLjUwOTY1IDguMzI1NzggMi4xMDY2IDguNDA3NzUgMS45ODgxOSA4LjMyNTc4QzEuOTg4MTkgOC4zMjU3OCAyLjQ4MjMyIDcuNTA4MyAyLjg5OTAzIDcuOTU2ODlDMi43NjQzNyA4LjA3MTQxIDIuNjM2NjMgOC4xOTM4NCAyLjUxNjQ4IDguMzIzNUwyLjUwOTY1IDguMzI1NzhaIiBmaWxsPSIjQjVBMTY5Ii8+CjxwYXRoIGQ9Ik02LjkxMTU4IDIzLjk5M0M2LjkxMTU4IDIzLjk5MyA4LjEzMjExIDIyLjg1NDQgOC4xMzIxMSAyMS41OTUyQzguMTMyMTEgMjAuMzM1OSA3LjMyNjAxIDE5LjIyMjQgNi40Mzc5NCAxOC4wNTJDNS41NDk4NyAxNi44ODE2IDQuODY2NzMgMTUuODYxNCA0Ljg2NjczIDE0LjgxODVDNC44NjY3MyAxMy43NzU2IDUuMjM1NjIgMTIuNzM5NSA2LjY4ODQyIDExLjAxNTdMNi41ODU5NSAxMC45MjkyQzYuNTg1OTUgMTAuOTI5MiA0LjI0MDUzIDEyLjc5NDIgNC4yNDA1MyAxNS45Nzc2QzQuMjQwNTMgMTkuMTYxIDQuODQzOTYgMjEuOTUwNCAzLjIyMjY2IDIzLjk5OThMNi45MTE1OCAyMy45OTNaIiBmaWxsPSIjQjVBMTY5Ii8+CjxwYXRoIGQ9Ik0yLjEzMzY1IDIzLjk5MzlDMi4xMzM2NSAyMy45OTM5IDMuNjYxNTkgMjIuNTk4IDMuNjYxNTkgMjAuODUxNUMzLjY2MTU5IDE5LjEwNDkgMi41ODQ1MiAxNy40MzU4IDEuODIxNjkgMTYuNTA2N0MxLjA1ODg2IDE1LjU3NzcgMCAxNC4wNzI1IDAgMTQuMDcyNVYyMy45OTM5SDIuMTMzNjVaIiBmaWxsPSIjQjVBMTY5Ii8+CjxwYXRoIGQ9Ik02LjgzMjAzIDBDNi44MzIwMyAwIDcuNTE1MTYgMC44ODM1MTkgNy40NTgyNCAyLjQ3MDY3QzcuNDU4MjQgMi40NzA2NyA5LjA3MjcxIDEuMDM2MDkgMTEuMDI4NyAxLjY2MjI5QzExLjAyODcgMS42NjIyOSA5LjM1OTYyIDAuMjQxMzc0IDguNTUxMjUgMEg2LjgzMjAzWiIgZmlsbD0iI0I1QTE2OSIvPgo8L3N2Zz4K"
                        alt="powered-by-logo"
                      />{" "}
                    </b>
                  </small>
                ) : (
                  ""
                )}
              </div>

              <div>
                <ul
                  className="nav nav-pills my-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        active === "Picks" ? "active" : ""
                      }`}
                      onClick={() => handleActiveTab("Picks")}
                      id="pills-picks-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-picks"
                      type="button"
                      role="tab"
                      aria-controls="pills-picks"
                      aria-selected="true"
                    >
                      Picks
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        active === "Odds" ? "active" : ""
                      }`}
                      onClick={() => handleActiveTab("Odds")}
                      id="pills-odds-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-odds"
                      type="button"
                      role="tab"
                      aria-controls="pills-odds"
                      aria-selected="false"
                    >
                      Odds
                    </button>
                  </li>
                  <li className="ms-2">
                    <select
                      className="form-select"
                      name="categories"
                      id="categories"
                      value={selectedValue}
                      onChange={handleChange}
                    >
                      <option value="NFL">NFL</option>
                      <option value="NCAAF">NCAAF</option>
                      <option value="NBA">NBA</option>
                      <option value="NCAAM">NCAAM</option>
                      <option value="MLB">MLB</option>
                      <option value="NHL">NHL</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="m-3">
            <div className="tab-content" id="pills-tabContent">
              <div
                className={`tab-pane fade${
                  active === "Picks" ? "show active" : ""
                }`}
                id="pills-picks"
                role="tabpanel"
                aria-labelledby="pills-picks-tab"
              >
                <PicksComp />
              </div>
              <div
                className={`tab-pane fade${
                  active === "Odds" ? "show active" : ""
                }`}
                id="pills-odds"
                role="tabpanel"
                aria-labelledby="pills-odds-tab"
              >
                <OddsComp
                  handleActiveTab={handleActiveTab}
                  title={title}
                  sort={sort}
                />
              </div>
            </div>
          </section>
        </div>
      </>
      <section className="bg-dark">
        <div className="p-4">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default OddsPicks;
