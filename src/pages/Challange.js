import React, { useEffect, useRef, useState } from "react";
import "../assets/css/challange.scss";
import PlayerCard from "../components/Challange/PlayerCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import sampleImg1 from "../assets/images/PlayerScreen/myPic.jpg";
import sampleImg2 from "../assets/images/PlayerScreen/myPic1.png";
import pak from "../assets/images/PlayerScreen/pak.svg";
import dia from "../assets/images/PlayerScreen/dia.svg";
import FrameCongra from "../assets/images/PlayerWaiting/FrameCongra.png";
import AdsRatio from "../../src/assets/images/Challange/ads_ratio.svg";
import "../assets/css/style.scss";
import Congra from "../components/Challange/Congra";
import Qauestions from "../components/Challange/Qauestions";
import withAuth from "../components/Auth";
import { useLocation, useNavigate } from "react-router";
import { gameWinDetail, getTvContest, startContest } from "../services/service";
import socketIo from "../helper/sockerManager";

function Challange() {
  const [nextNav, setNextNav] = useState(1);
  const [timerPlaying, setTimerPlaying] = useState();
  const [timeComplete, setTimeComplete] = useState();
  const [key, setKey] = useState(0);
  const updateKey = useRef(0);
  const [playAnim, setPlayAnim] = useState(1);
  const [question, setQuestion] = useState();
  const [correctAns,setCorrectAns]=useState();
  const [selectedIndex1, setSelectedIndex1] = useState();
  const [selectedIndex2, setSelectedIndex2] = useState();
  const [userResult1, setUserResult1] = useState();
  const [userResult2, setUserResult2] = useState();
  const [winnerPlayer, setWinnerPlayer] = useState();
  const [winnerPlayerStarts, setWinnerPlayerStars] = useState();
  const [loader, setLoader] = useState(false);
  const [todayPrize, setTodayPrize] = useState();
  const [isCorrectOpt1,setisCorrectOpt1]=useState()
  const [isCorrectOpt2,setisCorrectOpt2]=useState()
  const [isCorrectOpt3,setisCorrectOpt3]=useState()
  const [isCorrectOpt4,setisCorrectOpt4]=useState()
  const location = useLocation();
  const navigate = useNavigate();
  const updateNextNave = () => {
    setNextNav(nextNav + 1);
  };

  useEffect(() => {
    individualQuestionResponse();
  }, []);
  useEffect(() => {
    handleupdateQuestion();
  }, []);
  async function fetchData() {
    const response = await getTvContest();
    setLoader(false);
    setTodayPrize(response?.response?.contests?.[0]);
  }
  const handleupdateQuestion = () => {
    setKey(Math.random());
    setTimerPlaying(false);
    setTimeout(() => {
      setTimerPlaying(true);
    }, 5000);

    setQuestion(location?.state?.question?.[updateKey?.current]);
    if (updateKey.current < 5) updateKey.current = updateKey.current + 1;
    setPlayAnim(Math.random());
    setSelectedIndex1(false);
    setSelectedIndex2(false);
    setCorrectAns(null);
  };
  const handleGameWin = async (userOne, userTwo) => {
    console.log("Player Result in if condition of function");

    if (!(userOne?.game_result == 2)) {
      console.log("Player Result in if condition of If");

      await gameWinDetail({
        user_id: location?.state?.user1?.id,
        contest_id: userOne?.contest_id,
        is_winner: userOne?.game_result,
      });
      await gameWinDetail({
        user_id: location?.state?.user2?.id,
        contest_id: userTwo?.contest_id,
        is_winner: userTwo?.game_result,
      });
    }
  };
  const handleFinalWin = async (userOne, userTwo) => {

    if (!(userOne?.game_result == 2)) {

      await gameWinDetail({
        user_id: location?.state?.user1?.id,
        contest_id: userOne?.contest_id,
      });
      await gameWinDetail({
        user_id: location?.state?.user2?.id,
        contest_id: userTwo?.contest_id,
      });
    }
  };
  const individualQuestionResponse = () => {
    socketIo.on("individualQuestionResult", (response) => {
      console.log("Response", response);
      setUserResult1(response?.data?.[location?.state?.user1?.id]);
      setUserResult2(response?.data?.[location?.state?.user2?.id]);

      setSelectedIndex1(
        response?.data?.[location?.state?.user1?.id]?.selected_index
      );
      
      setSelectedIndex2(
        response?.data?.[location?.state?.user2?.id]?.selected_index
      );

      // set the right correct answer after both players selct their option
        setCorrectAns(location?.state?.question?.[updateKey?.current-1]?.firstLanguage?.correct_answer)

      
      if (response?.data?.[location?.state?.user1?.id]?.player_result) {
        if (location?.state?.numberOfUsers < 14) {
          handleGameWin(
            response?.data?.[location?.state?.user1?.id],
            response?.data?.[location?.state?.user2?.id]
          );
          setTimeout(() => {
            navigate("/leaderboard");
          }, 2000);
        } else {
          if (
            response?.data?.[location?.state?.user1?.id]?.player_result ==
            "You Won The Match"
          ) {
            setWinnerPlayer(location?.state?.user1);
            setWinnerPlayerStars(response?.data?.[location?.state?.user1?.id]);
            handleFinalWin(response?.data?.[location?.state?.user1?.id],response?.data?.[location?.state?.user2?.id]);
            fetchData()
            setTimeout(() => {
              setNextNav(2);
            }, 2000);
          } else if (
            response?.data?.[location?.state?.user2?.id]?.player_result ==
            "You Won The Match"
          ) {
            setWinnerPlayer(location?.state?.user2);
            setWinnerPlayerStars(response?.data?.[location?.state?.user2?.id]);
            handleFinalWin(response?.data?.[location?.state?.user1?.id],response?.data?.[location?.state?.user2?.id]);
            fetchData()
            setTimeout(() => {
              setNextNav(2);
            }, 2000);
          } else {
            setTimeout(() => {
              navigate("/leaderboard");
            }, 2000);
          }
        }
      } else {
        setTimeout(() => {
          handleupdateQuestion();
          

        }, 1000);
      }
    });
  };
  console.log("Winner player stars", winnerPlayerStarts);
  console.log("Winner player", winnerPlayer);
  return (
    <div className="challange " style={{ height: "100vh", overflow: "hidden" }}>
      <div className="mx-3">
        <Header
          nextNav={nextNav}
          timerPlaying={timerPlaying}
          setTimeComplete={setTimeComplete}
          key={key}
        />
      </div>
      <div className="row px-2 " style={{ height: "75vh" }}>
        <div className="col-3 ">
          <div className="row " style={{ height: "100%" }}>
            <div className="col-12 " style={{ height: "10%" }}>
              <div className=" my-0 mt-2">
                <PlayerCard
                  fontClass={"small-font"}
                  user={location?.state?.user1?.profile_image}
                  flag={location?.state?.user1?.short_code}
                  name={location?.state?.user1?.full_name}
                  coin={dia}
                  number={location?.state?.user1?.gems}
                  premium={location?.state?.user1?.is_premium}
                  userResult={userResult1}
                  isStar={true}
                  classc={nextNav==2?"unknown-player-background":""}
                />
              </div>
            </div>
            <div
              className="col-12 py-4  d-flex justify-content-center align-items-center"
              style={{ height: "40%" }}
            >
              <img
                style={{
                  width: "12vw",
                  height: "12vw",
                  borderRadius: "50%",
                  border: "2px solid #30AEBA",
                  objectFit: "cover",
                }}
                src={location?.state?.user1?.profile_image}
                alt=""
              />
            </div>

            <div
              className="col-12 d-flex justify-content-center mt-3"
              style={{ height: "60%" }}
            >
              <img
                style={{ width: "17vw", height: "17vw" }}
                src={FrameCongra}
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          className="col-6 "
          style={{
            height: "100%",
            borderRadius: "12px",
            background:
              "radial-gradient(88.22% 88.22% at 50% 0%, rgba(11, 90, 98, 0.8) 0%, rgba(7, 67, 75, 0) 100%), #000B0C",
          }}
        >
          {nextNav === 1 && (
            <>
              <Qauestions
                question={question}
                correctAns={correctAns}
                playAnim={playAnim}
                selectedIndex1={selectedIndex1}
                selectedIndex2={selectedIndex2}
                userProfile1={location?.state?.user1?.profile_image}
                userProfile2={location?.state?.user2?.profile_image}
              />
            </>
          )}

          {nextNav === 2 && (
            <Congra
              winnerPlayerStarts={winnerPlayerStarts}
              winnerUser={winnerPlayer}
              nextNav={3}
              todayPrize={todayPrize}
            />
          )}

          {/* {nextNav === 3 && <Congra nextNav={nextNav} />} */}

          {nextNav > 3 && setNextNav(3)}
        </div>

        <div className="col-3 ">
          <div className="row " style={{ height: "100%" }}>
            <div className="col-12 " style={{ height: "10%" }}>
              <div className=" my-0 mt-2">
                <PlayerCard
                  fontClass={"small-font"}
                  user={location?.state?.user2?.profile_image}
                  flag={location?.state?.user2?.short_code}
                  name={location?.state?.user2?.full_name}
                  coin={dia}
                  number={location?.state?.user2?.gems}
                  premium={location?.state?.user2?.is_premium}
                  userResult={userResult2}
                  isStar={true}
                  classc={nextNav==2?"unknown-player-background":""}
                />
              </div>
            </div>

            <div
              className="col-12 py-4  d-flex justify-content-center align-items-center"
              style={{ height: "40%" }}
            >
              <img
                style={{
                  width: "12vw",
                  height: "12vw",
                  borderRadius: "50%",
                  border: "2px solid #30AEBA",
                  objectFit: "cover",
                }}
                src={location?.state?.user2?.profile_image}
                alt=""
              />
            </div>

            <div
              className="col-12 d-flex justify-content-center mt-3"
              style={{ height: "60%" }}
            >
              <img
                style={{ width: "17vw", height: "17vw" }}
                src={AdsRatio}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12"
        style={{ position: "fixed", bottom: "0", backgroundColor: "black" }}
      >
        <Footer
          BackPage="/leaderboard"
          setNextNav={updateNextNave}
          nextNav={nextNav}
        />
      </div>
    </div>
  );
}
export default withAuth(Challange);
