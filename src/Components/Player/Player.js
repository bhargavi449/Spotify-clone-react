import React from "react";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Sidebar from "../SideBar/Sidebar";
import "./Player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/*Sidebar */}
        <Sidebar />
        {/* Body */}
        <Body spotify={spotify} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Player;
