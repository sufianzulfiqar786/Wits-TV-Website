import React from "react";
import sampleImg1 from "../../assets/images/PlayerScreen/myPic.jpg";
import crown from "../../assets/images/PlayerScreen/crown.svg";

export default function Option({
  opt,
  userProfile1,
  userProfile2,
  isSelected1,
  isSelected2,
  correctAns
}) {

  return (
    <div className={`option ${isSelected1 || isSelected2 ? "selected" : ""} ${correctAns?"correct":""}  `}>
      <div>
        <div className="position-absolute" style={{ right: "3%", top: "22%" }}>
          {isSelected1 && (
            <div className=" position-relative">
              <img
                className="player-screen-card-profile"
                src={userProfile1}
                alt="user"
              />

              <div className="position-absolute player-screen-card-crown-upper">
                <img src={crown} alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="option-select">{opt}</div>
      <div className="position-absolute" style={{ left: "3%", top: "22%" }}>
        {isSelected2 && (
          <div className=" position-relative">
            <img
              className="player-screen-card-profile"
              src={userProfile2}
              alt="user"
            />

            <div className="position-absolute player-screen-card-crown-upper">
              <img src={crown} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
