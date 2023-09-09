import React, { useEffect, useRef, useState } from "react";
import Xarrow from "react-xarrows";
import sampleImg1 from "../assets/images/PlayerScreen/myPic.jpg";
import sampleImg2 from "../assets/images/PlayerScreen/myPic1.png";
import pak from "../assets/images/PlayerScreen/pak.svg";
import dia from "../assets/images/PlayerScreen/dia.svg";
import PlayerIcon from "../assets/images/PlayerScreen/player_icon.svg";
import PlayerIcon2 from "../assets/images/PlayerScreen/player_icon2.svg";
import QuestionMark from "../assets/images/PlayerScreen/question_mark.svg";
import QuestionMark2 from "../assets/images/PlayerScreen/question_mark2.svg";
import crown from "../assets/images/PlayerScreen/crown.svg";
import Header from "./Header";
import Footer from "../components/Footer";
import LeaderBackground from "../assets/images/PlayerScreen/LeaderBoardBackgroundLogo.svg";
import "../assets/css/PlayerSubScreen.css";
import "../assets/css/LeaderBoardSub.css";
import { useNavigate } from "react-router-dom";
import Host from "./Host";
import PlayerCard from "./Challange/PlayerCard";
import { getContestPlayers, startContest } from "../services/service";
import Spinner from "./Spinner/spinner";
import socketIo from "../helper/sockerManager";
import WaitingGroupCall from "./WaitingScreenComponents/LeaderBoardCall";

const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px",
};

function SimpleExample() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);
  const box6Ref = useRef(null);
  const box7Ref = useRef(null);
  const box8Ref = useRef(null);
  const box9Ref = useRef(null);
  const box10Ref = useRef(null);
  const box11Ref = useRef(null);
  const box12Ref = useRef(null);
  const [loader, setLoader] = useState(false);
  const [users, setUsers] = useState();
  const [user1, setUser1] = useState();
  const [user2, setUser2] = useState();
  const [startGame, setStartGame] = useState(false);
  const navigate = useNavigate();
  const contestId = localStorage.getItem("contestId");
  const hostId = localStorage.getItem("host_id");
console.log('host',hostId)
  const myStyle = {
    opacity: 0.5, // set the opacity to 50%
    width: "24%",
  };

  const moveToChallange = () => {
    // navigate("/playerwaiting");
  };
  async function fetchData() {
    const response = await getContestPlayers(contestId);
    if (response.success) {
      setUsers(response?.response?.users);
      setLoader(false);
      setUser1(
        response?.response?.users.filter((user) => !user.is_played)?.[0]
      );
      setUser2(
        response?.response?.users.filter((user) => !user.is_played)?.[1]
      );
    }
  }
  const notifyAcceptChallange = async () => {
    socketIo.intializeSocket();
    socketIo.on("connect", () => {
      socketIo.emit("userconnected", `host-${hostId}`);
    });
    setStartGame(true);

    const response = await startContest(user1?.id, user2?.id, {
      contest_id: user1?.contest_id,
    });

    socketIo.on("acceptChallenge", (response) => {
      console.log("Response Accept Challenge ", response);

      setTimeout(() => {
        if (response) {
          // setUser(entry[1]?.user);
          // setOpponent(entry[1]?.opponent_user);

          // if (entry[1]?.flag == 5 || entry[1]?.flag == 0) {
          //   setTimeout(() => {
          //     alert(entry[1]?.message);
          //   }, 1000);
          // } else {
          //   setTimeout(() => {
          //     setChallengeAccepted(true);
          //   }, 500);
          // }
          setTimeout(() => {
            if (response?.[user1?.id]["should_start_game"] == 1) {
              navigate("/challange", {
                state: {
                  question: response?.[user1?.id]["questions"],
                  user1: response?.[user1?.id]?.user,
                  user2: response?.[user2?.id]?.user,
                  numberOfUsers:users?.length
                },
              });
              setStartGame(false);
            }
          }, 3000);
        }
      }, 500);
    });
  };

  useEffect(() => {
    
    setLoader(true);
    fetchData();
  }, []);

  const jsonString = localStorage.getItem("Language");

  // Parse JSON data back into a JavaScript object
  const Language = JSON.parse(jsonString);

  return (
    <div className="leader-board-inner ">
      <Header />
      <div
        className="row d-flex justify-content-center mt-2 "
        style={{ color: "#D6A15E" }}
      >
        <h3 className="p-0 leader-heading">
          {" "}
          {Language.translation.leaderboard_text
            ? Language.translation.leaderboard_text
            : "LEADERBOARD"}{" "}
        </h3>
      </div>
      {loader ? (
        <Spinner height="29%" />
      ) : (
        <div
          className="px-3  pt-0 "
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <div
            className="row position-relative  px-0 leader-board-inner-border pb-0 pt-3 px-2 "
            style={{ width: "100%" }}
          >
            <div className="col-12">
              <div className="row">
                <div className="col-2">
                  <div
                    className=" my-0 leader-board-tail-circle-right"
                    ref={box1Ref}
                  >
                    <PlayerCard
                      fontClass={"small-font"}
                      user={users?.[0]?.profile_pic}
                      flag={users?.[0]?.short_code}
                      name={users?.[0]?.full_name}
                      coin={dia}
                      number={users?.[0]?.gems}
                      premium={users?.[0]?.is_premium}
                      class2={users?.[0]?.is_played==1?"layer-screen-body-opacity":""}
                    />
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2">
                  <div
                    className=" my-0 leader-board-tail-circle-left"
                    ref={box3Ref}
                  >
                    <PlayerCard
                      fontClass={"small-font"}
                      user={users?.[4]?.profile_pic}
                      flag={users?.[4]?.short_code}
                      name={users?.[4]?.full_name}
                      coin={dia}
                      number={users?.[4]?.gems}
                      premium={users?.[4]?.is_premium}
                      class2={users?.[4]?.is_played==1?"layer-screen-body-opacity":""}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-2"> </div>
                <div className="col-2">
                  <div
                    className=" my-0 leader-board-tail-circle-right"
                    id="card2"
                    style={{ zIndex: "15" }}
                    ref={box9Ref}
                    onClick={moveToChallange}
                  >
                    {users?.length>=9?(
                        <PlayerCard
                        fontClass={"small-font"}
                        user={users?.[8]?.profile_pic}
                        flag={users?.[8]?.short_code}
                        name={users?.[8]?.full_name}
                        coin={dia}
                        number={users?.[8]?.gems}
                        premium={users?.[8]?.is_premium}
                        class2={users?.[8]?.is_played==1?"layer-screen-body-opacity":""}
                      />
                    ):(<PlayerCard
                      user={PlayerIcon}
                      questionImage={QuestionMark}
                    />)}
                    
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2">
                  <div
                    className=" my-0 leader-board-tail-circle-left"
                    id="card3"
                    style={{ zIndex: "15" }}
                    ref={box10Ref}
                    onClick={moveToChallange}
                  >
                     {users?.length>=11?(
                        <PlayerCard
                        fontClass={"small-font"}
                        user={users?.[10]?.profile_pic}
                        flag={users?.[10]?.short_code}
                        name={users?.[10]?.full_name}
                        coin={dia}
                        number={users?.[10]?.gems}
                        premium={users?.[10]?.is_premium}
                        class2={users?.[10]?.is_played==1?"layer-screen-body-opacity":""}
                      />
                    ):(<PlayerCard
                      user={PlayerIcon}
                      questionImage={QuestionMark}
                    />)}
                  </div>
                </div>
                <div className="col-2"> </div>
              </div>
            </div>

            <div className="col-12  " style={{ marginBottom: "2%" }}>
              <div className="row">
                <div className="col-2 ">
                  <div
                    className=" my-0 leader-board-tail-circle-right"
                    ref={box2Ref}
                  >
                    <PlayerCard
                      fontClass={"small-font"}
                      user={users?.[1]?.profile_pic}
                      flag={users?.[1]?.short_code}
                      name={users?.[1]?.full_name}
                      coin={dia}
                      number={users?.[1]?.gems}
                      premium={users?.[1]?.is_premium}
                      class2={users?.[1]?.is_played==1?"layer-screen-body-opacity":""}
                    />
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2">
                  <div
                    className=" my-0 leader-board-tail-circle-left"
                    ref={box4Ref}
                  >
                    <PlayerCard
                      fontClass={"small-font"}
                      user={users?.[5]?.profile_pic}
                      flag={users?.[5]?.short_code}
                      name={users?.[5]?.full_name}
                      coin={dia}
                      number={users?.[5]?.gems}
                      premium={users?.[5]?.is_premium}
                      class2={users?.[5]?.is_played==1?"layer-screen-body-opacity":""}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 ">
              <div className="row">
                <div className="col-2">
                  <div
                    className=" my-0 leader-board-tail-circle-right"
                    ref={box5Ref}
                  >
                    <PlayerCard
                      fontClass={"small-font"}
                      user={users?.[2]?.profile_pic}
                      flag={users?.[2]?.short_code}
                      name={users?.[2]?.full_name}
                      coin={dia}
                      number={users?.[2]?.gems}
                      premium={users?.[2]?.is_premium}
                      class2={users?.[2]?.is_played==1?"layer-screen-body-opacity":""}
                    />
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2">
                  <div
                    className=" my-0 leader-board-tail-circle-left"
                    ref={box6Ref}
                  >
                    <PlayerCard
                      fontClass={"small-font"}
                      user={users?.[6]?.profile_pic}
                      flag={users?.[6]?.short_code}
                      name={users?.[6]?.full_name}
                      coin={dia}
                      number={users?.[6]?.gems}
                      premium={users?.[6]?.is_premium}
                      class2={users?.[6]?.is_played==1?"layer-screen-body-opacity":""}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-2"> </div>
                <div className="col-2">
                  <div
                    className=" my-0 leader-board-tail-circle-right"
                    id="card4"
                    style={{ zIndex: "15" }}
                    ref={box11Ref}
                    onClick={moveToChallange}
                  >
                    {users?.length>=10?(
                        <PlayerCard
                        fontClass={"small-font"}
                        user={users?.[9]?.profile_pic}
                        flag={users?.[9]?.short_code}
                        name={users?.[9]?.full_name}
                        coin={dia}
                        number={users?.[9]?.gems}
                        premium={users?.[9]?.is_premium}
                        class2={users?.[9]?.is_played==1?"layer-screen-body-opacity":""}
                      />
                    ):(<PlayerCard
                      user={PlayerIcon}
                      questionImage={QuestionMark}
                    />)}
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2">
                  <div
                    className=" my-0 leader-board-tail-circle-left"
                    id="card5"
                    style={{ zIndex: "15" }}
                    ref={box12Ref}
                    onClick={moveToChallange}
                  >
                     {users?.length>=12?(
                        <PlayerCard
                        fontClass={"small-font"}
                        user={users?.[11]?.profile_pic}
                        flag={users?.[11]?.short_code}
                        name={users?.[11]?.full_name}
                        coin={dia}
                        number={users?.[11]?.gems}
                        premium={users?.[11]?.is_premium}
                        class2={users?.[11]?.is_played==1?"layer-screen-body-opacity":""}
                      />
                    ):(<PlayerCard
                      user={PlayerIcon}
                      questionImage={QuestionMark}
                    />)} 
                  </div>
                </div>
                <div className="col-2"> </div>
              </div>
            </div>

            <div style={{ marginBottom: "2%" }} className="col-12 ">
              <div className="row">
                <div className="col-2 ">
                  <div
                    className=" my-0 leader-board-tail-circle-right"
                    ref={box7Ref}
                  >
                    <PlayerCard
                      fontClass={"small-font"}
                      user={users?.[3]?.profile_pic}
                      flag={users?.[3]?.short_code}
                      name={users?.[3]?.full_name}
                      coin={dia}
                      number={users?.[3]?.gems}
                      premium={users?.[3]?.is_premium}
                      class2={users?.[3]?.is_played==1?"layer-screen-body-opacity":""}
                    />
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2">
                  <div
                    className=" my-0 leader-board-tail-circle-left"
                    ref={box8Ref}
                  >
                    <PlayerCard
                      fontClass={"small-font"}
                      user={users?.[7]?.profile_pic}
                      flag={users?.[7]?.short_code}
                      name={users?.[7]?.full_name}
                      coin={dia}
                      number={users?.[7]?.gems}
                      premium={users?.[7]?.is_premium}
                      class2={users?.[7]?.is_played==1?"layer-screen-body-opacity":""}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12  position-absolute leader-board-center-background"
              style={{
                top: "47%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
              }}
            >
              <div className="row">
                <div className="col-2 "> </div>
                <div className="col-2"></div>
                <div className="col-2">
                  <div className=" my-0 " id="card6" onClick={moveToChallange}>
                  {users?.length>=13?(
                        <PlayerCard
                        fontClass={"small-font"}
                        user={users?.[12]?.profile_pic}
                        flag={users?.[12]?.short_code}
                        name={users?.[12]?.full_name}
                        coin={dia}
                        number={users?.[12]?.gems}
                        premium={users?.[12]?.is_premium}
                        class2={users?.[12]?.is_played==1?"layer-screen-body-opacity":""}
                      />
                    ):(<PlayerCard
                      user={PlayerIcon2}
                      questionImage={QuestionMark2}
                      classc="unknown-player-background"
                    />)}
                    
                  </div>
                </div>
                <div className="col-2 ">
                  <div className=" my-0  " id="card7" onClick={moveToChallange}>
                  {users?.length>=14?(
                        <PlayerCard
                        fontClass={"small-font"}
                        user={users?.[13]?.profile_pic}
                        flag={users?.[13]?.short_code}
                        name={users?.[13]?.full_name}
                        coin={dia}
                        number={users?.[13]?.gems}
                        premium={users?.[13]?.is_premium}
                        class2={users?.[13]?.is_played==1?"layer-screen-body-opacity":""}
                      />
                    ):(<PlayerCard
                      user={PlayerIcon2}
                      questionImage={QuestionMark2}
                      classc="unknown-player-background"
                    />)}
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-2"> </div>
              </div>
            </div>

            {/* host name */}

            <div
              className="col-12  position-absolute text-light"
              style={{
                top: "105%",
                left: "51.5%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* <Host /> */}
            </div>

            {/* background logo  */}

            <div
              className="col-12 position-absolute text-light"
              style={{
                top: "50%",
                left: "51.5%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="row" style={{ width: "100%" }}>
                <div className="col-12 d-flex justify-content-center">
                  <img
                    className=""
                    style={myStyle}
                    src={LeaderBackground}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <Xarrow
            start={box1Ref} //can be react ref
            end="card2" //or an id
            lineColor={"#32C5B3"}
            headColor={"#32C5B3"}
            headSize={6}
            strokeWidth={1.5}
            // dashness={true}
            animateDrawing={1}
            curveness={0.9}
            showXarrow={true}
            headShape="arrow2"
          />

          <Xarrow
            start={box2Ref} //can be react ref
            end="card2" //or an id
            lineColor={"#32C5B3"}
            headColor={"#32C5B3"}
            headSize={6}
            strokeWidth={1.5}
            // dashness={true}
            animateDrawing={1}
            curveness={0.9}
            showXarrow={true}
            headShape="arrow2"
          />

          <Xarrow
            start={box3Ref} //can be react ref
            end="card3" //or an id
            lineColor={"#32C5B3"}
            headColor={"#32C5B3"}
            headSize={6}
            strokeWidth={1.5}
            // dashness={true}
            animateDrawing={1}
            curveness={0.9}
          />

          <Xarrow
            start={box4Ref} //can be react ref
            end="card3" //or an id
            lineColor={"#32C5B3"}
            headColor={"#32C5B3"}
            headSize={6}
            strokeWidth={1.5}
            // dashness={true}
            animateDrawing={1}
            curveness={0.9}
          />

          <Xarrow
            start={box5Ref} //can be react ref
            end="card4" //or an id
            lineColor={"#32C5B3"}
            headColor={"#32C5B3"}
            headSize={6}
            strokeWidth={1.5}
            // dashness={true}
            animateDrawing={1}
            curveness={0.9}
          />

          <Xarrow
            start={box6Ref} //can be react ref
            end="card5" //or an id
            lineColor={"#32C5B3"}
            headColor={"#32C5B3"}
            headSize={6}
            strokeWidth={1.5}
            // dashness={true}
            animateDrawing={1}
            curveness={0.9}
          />

          <Xarrow
            start={box7Ref} //can be react ref
            end="card4" //or an id
            lineColor={"#32C5B3"}
            headColor={"#32C5B3"}
            headSize={6}
            strokeWidth={1.5}
            // dashness={true}
            animateDrawing={1}
            curveness={0.9}
          />

          <Xarrow
            start={box8Ref} //can be react ref
            end="card5" //or an id
            lineColor={"#32C5B3"}
            headColor={"#32C5B3"}
            headSize={6}
            strokeWidth={1.5}
            // dashness={true}
            animateDrawing={1}
            curveness={0.9}
          />

          <Xarrow
            start={box9Ref} //can be react ref
            end="card6" //or an id
            lineColor={"#32C5B3"}
            headColor={"#32C5B3"}
            headSize={6}
            strokeWidth={1.5}
            // dashness={true}
            animateDrawing={1}
            curveness={0.9}
          />

          <Xarrow
            start={box10Ref} //can be react ref
            end="card7" //or an id
            lineColor={"#32C5B3"}
            headColor={"#32C5B3"}
            headSize={6}
            strokeWidth={1.5}
            // dashness={true}
            animateDrawing={1}
            curveness={0.9}
          />

          <Xarrow
            start={box11Ref} //can be react ref
            end="card6" //or an id
            lineColor={"#32C5B3"}
            headColor={"#32C5B3"}
            headSize={6}
            strokeWidth={1.5}
            // dashness={true}
            animateDrawing={1}
            curveness={0.9}
          />

          <Xarrow
            start={box12Ref} //can be react ref
            end="card7" //or an id
            lineColor={"#32C5B3"}
            headColor={"#32C5B3"}
            headSize={6}
            strokeWidth={1.5}
            // dashness={true}
            animateDrawing={1}
            curveness={0.9}
          />
        </div>
      )}
      {/* <div className="col-12 "><hr className='player-screen-body-text-line mt-2 mr-3 ml-3 ' /></div> */}
      <div className="leader-video-call">
        <WaitingGroupCall />
        {/* <RoomPage/> */}
      </div>

      <div
        className="col-12"
        style={{ position: "fixed", bottom: "0", backgroundColor: "black" }}
      >
        <Footer
          BackPage="/playerwaiting"
          onClickStart={notifyAcceptChallange}
          disableNext={true}
          disableStart={false}
          loadingStart={startGame}
        />
      </div>
    </div>
  );
}

export default SimpleExample;
