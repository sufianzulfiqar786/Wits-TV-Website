import React, { useEffect, useState } from "react";
import "../assets/css/PlayerSubScreen.css";
import HeaderLogo from "../assets/images/PlayerScreen/HeaderLogo.svg";
import sampleImg1 from "../assets/images/PlayerScreen/myPic.jpg";
import sampleImg2 from "../assets/images/PlayerScreen/myPic1.png";
import pak from "../assets/images/PlayerScreen/pak.svg";
import dia from "../assets/images/PlayerScreen/dia.svg";
import crown from "../assets/images/PlayerScreen/crown.svg";
import PlayerLeftIcon from "../assets/images/PlayerScreen/PlayerLeftIcon.svg";
import PlayerRightIcon from "../assets/images/PlayerScreen/PlayerRightIcon.svg";
import Header from "./Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.scss";
import PlayerCard from "./Challange/PlayerCard";
import Spinner from "./Spinner/spinner";
import {
  deleteUser,
  getContestants,
  getRandomUser,
  startContest,
  startRoom,
} from "../services/service";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

const PlayerSubScreen = () => {
  const [loader, setLoader] = useState(false);
  const [loaderNext, setLoaderNext] = useState(false);
  const [users, setUsers] = useState();
  const [randomUsers, setRandomUsers] = useState([]);
  const [randomAnimate, setRandomAnimate] = useState();
  const [isAnimate, setIsAnimate] = useState(false);
  const [numberOfUsers, setNumberOfUsers] = useState();
  const navigate = useNavigate();
const contestId=localStorage.getItem('contestId');
  async function fetchData() {
    const response = await getContestants(contestId);
    const res = await deleteUser(contestId);
    setUsers(response?.response?.users);
    setLoader(false);
    setNumberOfUsers(response?.response?.users?.length);
    
  }
  const selectRandomUser = async () => {
    // await deleteUser();
    setIsAnimate(true);
    const randomNumber = Math.floor(Math.random() * numberOfUsers);
    setRandomAnimate(randomNumber);

    const response = await getRandomUser(contestId);

    setTimeout(() => {
      setIsAnimate(false);
      setRandomUsers(response?.response?.users);
    }, 2000);
  };
  console.log("=====users==",randomUsers)
  const handleStartRoom = async () => {
    setLoaderNext(true);
    const response = await startRoom(contestId);
    if (response?.data?.token) {
      setLoaderNext(false);
      localStorage.setItem("videoToken",response?.data?.token)
      navigate("/playerwaiting");
    } else {
      setLoaderNext(false);
    }
    localStorage.setItem("videoToken", response?.data?.token);
  };
  useEffect(() => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * numberOfUsers);
      setRandomAnimate(randomNumber);
    }, 1000);
  }, [isAnimate]);
  useEffect(() => {
    setLoader(true);
    fetchData();
  }, []);

  const jsonString = localStorage.getItem("Language");

  // Parse JSON data back into a JavaScript object
  const Language = JSON.parse(jsonString);

  return (
    <div className="fluid-container" style={{ height: "100vh" }}>
      <Header />

      <div className="player-screen-body">
        <div className="row  mx-3 mb-2">
          <div className="col-12 my-0  d-flex justify-content-center align-items-center mt-2">
            <div
              className="mt-2 py-2 d-flex px-4 mb-0 justify-content-center  align-items-center"
              style={{
                border: "1px solid #D6A15E",
                boxShadow: " 0px 12px 24px -12px rgba(0, 0, 0, 0.5)",
                borderRadius: "84px",
                background: "rgba(0, 0, 0, 0.3)",
              }}
            >
              {" "}
              <img
                style={{ width: "1.7vw" }}
                src={PlayerLeftIcon}
                alt=""
              />{" "}
              <button
                onClick={selectRandomUser}
                disabled={isAnimate||randomUsers?.length>=8}
                className="px-2 mb-1 player-btn-select"
                style={{
                  fontSize: "1.4vw",
                  fontWeight: "700",
                  color: "#D6A15E",
                  letterSpacing: "1px",
                  border: "none",
                  background: "none",
                }}
              >
                {Language.translation.select_player
                  ? Language.translation.select_player
                  : "Select Player"}
              </button>{" "}
              <img style={{ width: "1.7vw" }} src={PlayerRightIcon} alt="" />{" "}
            </div>
          </div>

          {/* <div className="col-12"></div> */}

          <div className="col-12 mt-1 px-4">
            <div className="row px-4">
              {randomUsers?.map((user) => {
                return (
                  <div
                    style={{ opacity: 1 }}
                    className="col-lg-3 col-md-3 col-4 mb-2 mt-2 px-1"
                  >
                    <PlayerCard
                      user={user?.profile_pic}
                      flag={user?.short_code}
                      name={user?.full_name}
                      coin={dia}
                      premium={user?.is_premium}
                      number={user?.gems}
                      classc={"player-screen-body-border-color"}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-12 ">
            <hr className="player-screen-body-text-line mt-2 mb-2 " />
          </div>

          <div className="col-12">
            {loader ? (
              <Spinner height="60vh" />
            ) : (
              <div
                className="row mx-2 scroller mt-2 "
                style={{ overflowY: "auto" }}
              >
                {users?.map((user, index) => {
                  return (
                    <div className="col-lg-2 col-md-3 col-4 mb-3  px-1">
                      <PlayerCard
                        user={user?.profile_pic}
                        flag={user?.short_code}
                        name={user?.full_name}
                        coin={dia}
                        premium={user?.is_premium}
                        number={user?.gems}
                        classc={
                          index == randomAnimate && isAnimate
                            ? "player-screen-body-border-color"
                            : ""
                        }
                        class2={
                          index != randomAnimate &&
                          isAnimate &&
                          "layer-screen-body-opacity"
                        }
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {/* <div className="col-12 "><hr className='player-screen-body-text-line mt-4 mx-3 ' /></div> */}

        <div
          className="col-12"
          style={{ position: "fixed", bottom: "0", backgroundColor: "black" }}
        >
          <Footer
            BackPage="/today-prize"
            setNextNav={handleStartRoom}
            loading={loaderNext}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerSubScreen;
