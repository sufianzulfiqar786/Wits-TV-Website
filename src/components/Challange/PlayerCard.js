import React from "react";
import "../../assets/css/PlayerWaitingScreen.css";
import "../../assets/css/PlayerSubScreen.css";

import crown from "../../assets/images/PlayerScreen/crown.svg";
import Rive, { Fit } from "@rive-app/react-canvas";
import StarIcon from "../../assets/images/Challange/stars_anim.riv";

export default function PlayerCard({
  user,
  flag,
  name,
  coin,
  number,
  onClick,
  classc,
  fontClass,
  isStar = false,
  premium,
  class2,
  questionImage,
  userResult,
  winnerImage
}) {
  return (
    <>
      <div
        onClick={onClick}
        className={`player-screen-body-border  ${class2} ${classc}`}
      >
        <div className="d-flex p-1 px-3">
          <div className=" position-relative">
            <img className={`player-screen-card-profile ${winnerImage}`} src={user} alt="user" />

            <div className="position-absolute player-screen-card-crown-upper">
              {premium == 1 ? <img src={crown} alt="" /> : null}
            </div>
            {questionImage && (
              <img className="pl-3" src={questionImage} alt="" />
            )}
          </div>

          <div className=" d-flex flex-column ml-2">
            <div className="player-screen-card-div1-upper">
              <span
                className={`fi fi-${flag?.toLowerCase()}`}
              ></span>
              &nbsp;
              {name && (
                <div
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                  className={`text-light ${fontClass}`}
                >
                  {window.innerWidth < 1440
                    ? name.length > 8
                      ? `${name.slice(0, 8)}...`
                      : name
                    : name}
                </div>
              )}
            </div>

            <div className="player-screen-card-div2-upper ml-1">
              {coin && <img src={coin} alt="" />}
              &nbsp;
              <span
                className={` text-light ${fontClass}`}
                style={{ paddingLeft: "5.5px" }}
              >
                {number}
              </span>
            </div>
          </div>
          {isStar && (
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',paddingLeft:'10px'}}>
            {/* <div className="col-6 px-0 d-flex justify-content-end align-items-center">
              <i
                class="fa-solid fa-star "
                style={{
                  color: "#F24382",
                  width: "2%",

                  marginRight: "13%",
                }}
              ></i>
              <i
                class="fa-solid fa-star "
                style={{
                  color: "#A6A6A6",
                  width: "2%",

                  marginRight: "13%",
                }}
              ></i>
              <i
                class="fa-solid fa-star "
                style={{
                  color: "#A6A6A6",
                  width: "2%",

                  marginRight: "13%",
                }}
              ></i>
              <i
                class="fa-solid fa-star "
                style={{
                  color: "#A6A6A6",
                  width: "2%",

                  marginRight: "13%",
                }}
              ></i>
              <i
                class="fa-solid fa-star "
                style={{
                  color: "#A6A6A6",
                  width: "2%",

                  marginRight: "13%",
                }}
              ></i>
            </div> */}
            {userResult?.stars_rr.map((star, index) => {
                  return (
                    <div  style={{height:"4vh",width:'1.5vw'}}  key={index}>
                      <Rive
                        src={StarIcon}
                        animations={
                          star.result === 1 ? "star_correct" : "star_wrong"
                        }
                        fit={Fit.Contain}
                      />
                    </div>
                  );
                })}
                  {/* <div  style={{height:"30px",width:'30px'}} key={0}>
                      <Rive
                        src={StarIcon}
                        animations={
                          "star_idle"
                        }
                        fit={Fit.Contain}
                      />
                    </div>
                    <div  style={{height:"30px",width:'30px'}} key={0}>
                      <Rive
                        src={StarIcon}
                        animations={
                          "star_idle"
                        }
                        fit={Fit.Contain}
                      />
                    </div>
                    <div  style={{height:"30px",width:'30px'}} key={0}>
                      <Rive
                        src={StarIcon}
                        animations={
                          "star_idle"
                        }
                        fit={Fit.Contain}
                      />
                    </div> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
