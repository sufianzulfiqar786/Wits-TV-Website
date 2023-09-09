import React, { useEffect, useState } from "react";
import sampleImg1 from "../../assets/images/PlayerScreen/myPic.jpg";
import pak from "../../assets/images/PlayerScreen/pak.svg";
import dia from "../../assets/images/PlayerScreen/dia.svg";
import crown from "../../assets/images/PlayerScreen/crown.svg";
import "../../assets/css/style.scss";
import "../../assets/css/challange.scss";
import Host from "../Host";
import TodayPrizeCard from "../TodayPrize/todayPrizeCard";
import PlayerCard from "./PlayerCard";
import { deleteUser, getTvContest } from "../../services/service";
import { useNavigate } from "react-router-dom";
import WaitingGroupCall from "../WaitingScreenComponents/LeaderBoardCall";

const Congra = ({ nextNav, winnerUser, winnerPlayerStarts, todayPrize }) => {
  const jsonString = localStorage.getItem("Language");
  const contestId = localStorage.getItem("contestId");
  // Parse JSON data back into a JavaScript object
  const Language = JSON.parse(jsonString);
  const navigate = useNavigate();
  const deleteContestUser = async () => {
    const res = await deleteUser(contestId,{winner_id:winnerUser?.id});
  };
  useEffect(() => {
    deleteContestUser();
  }, []);
  useEffect(() => {
    const handleBackButton = () => {
      navigate("/today-prize");
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  return (
    <>
      <div className="row my-3">
        <div
          className="col-12 challange-congra-header my-5 pt-2 pb-3 mb-0 d-flex justify-content-center"
          style={{ height: "17%" }}
        >
          {Language.translation.congratulation_text
            ? Language.translation.congratulation_text
            : "CONGRATULATIONS!"}
        </div>

        <div className="col-12 my-3 ">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 ">
              <div className=" my-0 ">
                <PlayerCard
                  fontClass={"small-font"}
                  user={winnerUser?.profile_image}
                  flag={winnerUser?.short_code}
                  name={winnerUser?.full_name}
                  coin={dia}
                  number={winnerUser?.gems}
                  premium={winnerUser?.is_premium}
                  userResult={winnerPlayerStarts}
                  isStar={true}
                  classc="unknown-player-background winner"
                  winnerImage={"winner-height"}
                />
              </div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
        {console.log("first", nextNav)}
        {nextNav === 3 && (
          <div className="col-12 my-2 " style={{ height: "100%" }}>
            <TodayPrizeCard
              marginLeftCongra="0.1%"
              removeHeader="none"
              RightAdSize="congr-today-prize-right-ad"
              todayPrize={todayPrize}
            />
          </div>
        )}

        <div className="leader-video-call" style={{ margin: "0px auto" }}>
          <WaitingGroupCall iswidth={true}  videoWidth={"video-cong"} />
        </div>
        {/* <div
            className="col-12 position-absolute text-light"
            style={{
              top: "84.5%",
              left: "52.88%",
              transform: "translate(-50%, -50%)",
            }}
          ></div> */}
      </div>
    </>
  );
};

export default Congra;
