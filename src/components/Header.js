import React from "react";
import "../assets/css/PlayerSubScreen.css";
import headerLogo from "../assets/images/PlayerScreen/HeaderLogoo.svg";
// import { Language } from "../pages/SelectLanguage";
import Timer from "./Challange/timer";

const Header = ({ timerPlaying, nextNav, setTimeComplete, key }) => {

  const jsonString = localStorage.getItem("Language");

    // Parse JSON data back into a JavaScript object
    const Language = JSON.parse(jsonString);
  
  return (
    <>
      <div
        className="row player-screen-header position-relative "
        style={{ zIndex: "15" }}
      >
        <div className="col-6 player-screen-header-text d-flex justify-content-end">
          <p className="player-screen-header-text-right  mt-3 ">
          {Language.translation? Language.translation.the_more_you_win : "THE MORE YOU WIN" }
          </p>
        </div>

        <div className="col-6 player-screen-header-text">
          <p className="player-screen-header-text-left  mt-3 ">
          {Language.translation? Language.translation.the_luckier_you_get : "THE LUCKIER YOU GET" } 
          </p>
        </div>

        <div className=" text-light position-absolute player-screen-header-logo">
          { nextNav == 1 ? (
            <Timer timerPlaying={timerPlaying} key={key} setTimeComplete={setTimeComplete}/>
          ) : (
            <img src={headerLogo}  alt="" />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
