import React from "react";
import mute from "../../assets/images/PlayerWaiting/mute.svg";
import pak from "../../assets/images/PlayerScreen/pak.svg";
import "../../assets/css/style.scss";
import Rive, { Fit } from "@rive-app/react-canvas";
import World from "../../assets/images/PlayerWaiting/world_rotate_web.riv";
export default function WaitingCall({ fromLeaderBoard, name, videoWidth }) {
  return (
    <div
      className={`${
        fromLeaderBoard ? "video-card-up-leader" : "video-card-up"
      }`}
    >
      <div
        style={{ width: fromLeaderBoard ? "80%" : "70%", height: "162px" }}
        className="rive px-4  py-2 px-0 "
      >
        <div className="rive-animation ">
          <Rive src={World} animations={"worldRotate"} fit={Fit.None} />
        </div>
        <div className="rive-head my-2 d-flex justify-content-center">
          {" "}
          Waiting for Player
        </div>

        <div
          className=" controlSection  d-flex align-items-center justify-content-center "
          style={{
            width: fromLeaderBoard ? "115%" : "167px",
            marginLeft: "-20px",
          }}
        >
          <div
            className="row      d-flex align-items-center justify-content-center"
            style={{ width: "100%", marginBottom: "3px" }}
          >
            <div className="col-9 pl-3 ">
              <div className=" country-name">
                {/* <img className="pl-1" src={pak} /> */}
                <span
                  className="pl-1 "
                  style={{ color: "white", fontSize: "14px" }}
                >
                  {name}
                </span>
              </div>
            </div>
            <div className="col-3 pr-4  d-flex  justify-content-end">
              <img className="pr-2" src={mute} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
