import React from "react";
import { Progress } from "antd";
import CarImage from "../../assets/images/TodayPrizeScreen/car-image.svg";
import DollarImage from "../../assets/images/TodayPrizeScreen/dollar-image.svg";
import GoldImage from "../../assets/images/TodayPrizeScreen/gold-image.svg";
import MobileImage from "../../assets/images/TodayPrizeScreen/mobile-image.svg";
import sampleImg1 from '../../assets/images/PlayerScreen/myPic.jpg'
import '../../assets/css/nextPrizeAdd.scss'
import '../../assets/css/style.scss'
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { ClosingDays } from "../ClosingDays/ClosingDays";
// import AuthGoldenButton from "../Buttons/AuthGoldenButton/authGoldenButton";

const contests = [
    {
        image: sampleImg1,
        title: "2022 Car VLX Classic...",
        soldNumber: "1335",
        totalNumber: "1750",
        barColor: "#FFCE1F",
    },
    {
        image: sampleImg1,
        title: "200gr Carat GOLD",
        soldNumber: "1335",
        totalNumber: "1750",
        barColor: "#FFCE1F",
    },
    {
        image: sampleImg1,
        title: "$CASH USD $20,000.00",
        soldNumber: "1335",
        totalNumber: "1750",
        barColor: "#FFCE1F",
    },
    {
        image: sampleImg1,
        title: "2022 Car VLX Classic...",
        soldNumber: "1335",
        totalNumber: "1750",
        barColor: "#FF7D1F",
    },
    {
        image: MobileImage,
        title: "2022 Car VLX Classic...",
        soldNumber: "1335",
        totalNumber: "1750",
        barColor: "#FF7D1F",
    },
];

const NextPrizeCardAd = ({ play }) => {
    //   const navigate = useNavigate();
    //   const allContests = useSelector(
    //     (state) => state?.lobbyContest?.data?.response?.contests
    //   );
    //   const { translation } = useSelector(
    //     (state) => state.languageSlice.langaugeStrings
    //   );
    //   let sortContest = allContests?.slice().sort((a, b) => {
    //     let tmp = ClosingDays(a.expiry_date);
    //     let tmp1 = ClosingDays(b.expiry_date);
    //     return tmp - tmp1;
    //   });

    //   const location = useLocation();

    //   const handleBuyContest = (contestId) => {
    //     sessionStorage.setItem("contestID", contestId);
    //     navigate("/webbuyvouchar");
    //   };
    //   const handleContestDetails = (contestId) => {
    //     sessionStorage.setItem("Contest Details ID", contestId);
    //     navigate("/contestdetail", {
    //       state: {
    //         contestId: contestId,
    //         friendId: location?.state?.friendId,
    //         play: play,
    //       },
    //     });
    //   };
    return (
        <div className="lobby-contests " style={{position:"relative",}}>
            {
                contests.map((value, index) => {
                    return (
                        <div className="contest-ad " key={index} >
                            <div className="contest-ad-top ">
                                <div
                                    className="contest-ad-top-image  d-flex justify-content-center align-items-center"
                                    onClick={() => { }}
                                >
                                    <img
                                        src={value?.image}
                                        alt="Contest Images"
                                        className="contest-ad-top-image-icon py-3"
                                        // style={{width:"60%"}}
                                    />
                                </div>
                            </div>
                            <div className="contest-ad-bottom ">
                                <div className="contest-ad-bottom-chance "  style={{marginTop:"-4%" }}>
                                   <span>{"Get a chance to win"} </span> 
                                </div>
                                <div className="contest-ad-bottom-title">
                                  <span>  {value.title} </span>
                                </div>
                                <div className="contest-ad-bottom-numbers " style={{marginTop:"-5%", marginBottom:"-5%" }}>
                                    <span>{value.soldNumber}</span>{" "}
                                   <span> {"Sold out of"} </span>
                                    <span> {value.totalNumber}</span>
                                </div>
                                <div className="px-2 ">
                                    <Progress
                                        percent={50}
                                        showInfo={false}
                                        strokeColor={"#FF7D1F"}
                                        trailColor={"#E6E6E6"}
                                    />

                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default NextPrizeCardAd;
