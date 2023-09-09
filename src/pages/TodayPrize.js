import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../assets/css/TodayPrize.scss";
import "../assets/css/PlayerWaitingScreen.css";
import Ads11 from "../assets/images/TodayPrizeScreen/leftTop1.png";
import Ads111 from "../assets/images/TodayPrizeScreen/letfTop11.png";
import BottomAd1 from "../assets/images/TodayPrizeScreen/bottom_1.png";
import BottomAd2 from "../assets/images/TodayPrizeScreen/bottom_2.png";
import PlayerWaitingImg1 from "../assets/images/PlayerWaiting/PlayerWaitingImg1.png";
import PlayerWaitingImg2 from "../assets/images/PlayerWaiting/PlayerWaitingImg2.png";
import PlayerWaitingImg3 from "../assets/images/PlayerWaiting/PlayerWaitingImg3.png";
import Announcement from "../components/TodayPrize/announcement";
import NextPrizeCardAd from "../components/TodayPrize/nextPrizeCardAdd";
import Footer from "../components/Footer";
import TodayPrizeCard from "../components/TodayPrize/todayPrizeCard";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner/spinner";
import { getTvContest } from "../services/service";
import withAuth from "../components/Auth";

 function TodayPrize() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [todayPrize, setTodayPrize] = useState();
  const [contestId, setContestId] = useState();

  const moveToNext = () => {
    // navigate("/playerscreen");
  };
  async function fetchData() {
    const response = await getTvContest();
    setLoader(false);
    setTodayPrize(response?.response?.contests?.[0]);
    setContestId(response?.response?.contests?.[0]?.contest_details?.contest_id);
    localStorage.setItem("contestId",response?.response?.contests?.[0]?.contest_details?.contest_id);
  }
  useEffect(() => {
    setLoader(true);

    fetchData();
  }, []);

  const jsonString = localStorage.getItem("Language");

    // Parse JSON data back into a JavaScript object
    const Language = JSON.parse(jsonString);

const signOut=()=>{
  localStorage.removeItem('count')
}

  
  return (
    <div
      className=""
      style={{
        overflow: "hidden",
        minHeight: "100vh",
        backgroundColor: "black",
      }}
    >
      <Header />

      <div className="today " style={{ height: "73vh" }}>
        {loader ? (
          <Spinner height="70vh" />
        ) : (
          <div className="row " style={{ height: "73vh" }}>
            <div className="col-3  " style={{ height: "100%" }}>
              <div className="row pr-3" style={{ height: "100%" }}>
                <div
                  className="col-12 ml-2 d-flex justify-content-center"
                  style={{ height: "46.5%" }}
                >
                  <img height={"100%"} width={"95.5%"} src={Ads11} />
                </div>

                <div
                  className="col-12 ml-2  d-flex justify-content-center"
                  style={{ height: "50%" }}
                >
                  <img height={"100%"} width={"95.5%"} src={Ads111} />
                </div>
              </div>
            </div>

            <div className="col-6 pl-0 ">
              <div className="row " onClick={moveToNext}>
                {/* <div className="col-12" style={{ height: "40%" }} > */}

                <TodayPrizeCard todayPrize={todayPrize} />

                {/* </div> */}

                {/* <div
                  className="col-12  px-4 mt-2 next-prize"
                  style={{ height: "60%" }}
                >
                  <Announcement title=  {Language.translation.next_price? Language.translation.next_price: "NEXT PRIZES" }   />
                  <NextPrizeCardAd />
                </div> */}
              </div>

              <div className="row mt-3 px-0 today-prize-ad-show">
                <div className="col-6 px-0 mt-2" style={{ height: "103px" }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={BottomAd1}
                  />
                </div>

                <div className="col-6 px-0 mt-2" style={{ height: "103px" }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={BottomAd2}
                  />
                </div>
              </div>
            </div>

            <div className="col-3" style={{ height: "100%" }}>
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
        )}

        <div
          className="col-12 "
          style={{ position: "fixed", bottom: "0", backgroundColor: "black" }}
        >
          <Footer
            NextPage="/playerscreen"
            BackPage={"/signin"}
            backClick={signOut}
          />
        </div>
      </div>
    </div>
  );
}
export default withAuth(TodayPrize)
