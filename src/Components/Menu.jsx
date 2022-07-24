import React from "react";
import { isMobile, MobileView } from "react-device-detect";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import BarChartIcon from "@mui/icons-material/BarChart";
import SsidChartIcon from "@mui/icons-material/SsidChart";

const Menu = (props) => {
  return (
    <>
      {isMobile === true && (
        <MobileView>
          <div
            className="hdfuhsjdfher"
            style={{
              width: "100%",
              position: "fixed",
              height: 50,
              bottom: 0,
              left: 0,
              zIndex: 999999999,
              background: "#333",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => props?.setSelect(() => 1)}
              style={{ cursor: "pointer",  }}
            >
              <HomeIcon style={{fill: parseInt(props?.select) === 1 ? "#2e89ff" : "#fff"}}></HomeIcon>
            </div>
            <div
              onClick={() => props?.setSelect(() => 2)}
              style={{ cursor: "pointer" }}
            >
              <ChatIcon style={{fill: parseInt(props?.select) === 2 ? "#2e89ff" : "#fff"}}></ChatIcon>
            </div>
            <div
              onClick={() => props?.setSelect(() => 3)}
              style={{ cursor: "pointer" }}
            >
              <BarChartIcon style={{fill: parseInt(props?.select) === 3 ? "#2e89ff" : "#fff"}}></BarChartIcon>
            </div>
            <div
              onClick={() => props?.setSelect(() => 4)}
              style={{ cursor: "pointer" }}
            >
              <SsidChartIcon style={{fill: parseInt(props?.select) === 4 ? "#2e89ff" : "#fff"}}></SsidChartIcon>
            </div>
          </div>
        </MobileView>
      )}
    </>
  );
};

export default Menu;
