import React from "react";
import Header from "./Header";
import Footer from "../components/Footer";
import "../assets/css/PlayerWaitingScreen.css";
import "../assets/css/PlayerSubScreen.css";
import DesktopMediumRectangle from "../assets/images/PlayerWaiting/DesktopMediumRectangle.png";
import PlayerWaitingImg1 from "../assets/images/PlayerWaiting/PlayerWaitingImg1.png";
import PlayerWaitingImg2 from "../assets/images/PlayerWaiting/PlayerWaitingImg2.png";
import PlayerWaitingImg3 from "../assets/images/PlayerWaiting/PlayerWaitingImg3.png";
import WaitingGroupCall from "./WaitingScreenComponents/WaitingGroupCall";
import WaitingGroupList from "./WaitingScreenComponents/WaitingGroupList";

const PlayerSubWaitingScreen = () => {
  return (
    <>
      <div
        className="fluid-container player-waiting"
        style={{ height: "100vh" }}
      >
        <Header />

        <div className="row player-waiting-body ">
          <div className="col-3 " style={{ height: "100%" }}>
            <div
              className="mx-2 pr-2"
              style={{ height: "100%", width: "100%" }}
            >
              {" "}
              <img
                className="player-waiting-left-img"
                style={{ height: "100%", width: "100%" }}
                src={DesktopMediumRectangle}
                alt=""
              />{" "}
            </div>
          </div>

          <div className="col-6  player-waiting-main">
{/* <WaitingGroupList/> */}
            <WaitingGroupCall />
          </div>

          <div className="col-3 " style={{ height: "80%" }}>
            <div className="row" style={{ height: "100%" }}>
              <div className="col-12 mb-2" style={{ height: "40%" }}>
                <img
                  style={{ height: "100%" }}
                  className="player-waiting-right-img1"
                  src={PlayerWaitingImg1}
                  alt=""
                />
              </div>

              <div className="col-12 mb-2" style={{ height: "25%" }}>
                <img
                  style={{ height: "100%" }}
                  className="player-waiting-right-img2"
                  src={PlayerWaitingImg2}
                  alt=""
                />
              </div>

              <div className="col-12" style={{ height: "31.5%" }}>
                <img
                  style={{ height: "100%" }}
                  className="player-waiting-right-img3"
                  src={PlayerWaitingImg3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-12 "><hr className='player-screen-body-text-line mt-4 mx-3 ' /></div> */}
        <div
          className="col-12"
          style={{ position: "fixed", bottom: "0", backgroundColor: "black" }}
        >
          <Footer BackPage="/playerscreen" NextPage={"/leaderboard"} />
        </div>
      </div>
    </>
  );
};

export default PlayerSubWaitingScreen;
