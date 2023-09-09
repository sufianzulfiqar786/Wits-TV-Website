import React from "react";
import Announcement from "./announcement";
import Vespa from "../../assets/images/TodayPrizeScreen/vespa.png";
import Gold from "../../assets/images/TodayPrizeScreen/gold.svg";
import Mandala from "../../assets/images/TodayPrizeScreen/mandala.svg";
import NassarMptors from "../../assets/images/TodayPrizeScreen/nassarmotors.svg";
import Sponsor from "../../assets/images/TodayPrizeScreen/sponsor.svg";
import "../../assets/css/style.scss";
import Header from "../Header";

export default function TodayPrizeCard({
  marginLeftCongra,
  removeHeader,
  RightAdSize,
  todayPrize,
}) {

  const jsonString = localStorage.getItem("Language");

  // Parse JSON data back into a JavaScript object
  const Language = JSON.parse(jsonString);


  return (
    <>
      <div
        className="col-12 px-4 pb-2"
        style={{ backgroundColor: "white", borderRadius: "8.63466px" }}
      >
        <span style={{ display: `${removeHeader}` }}>
          {" "}
          <Announcement title=  {Language.translation.today_price? Language.translation.today_price: "TODAYS's PRIZE" }    />{" "}
        </span>

        <div className="row ">
          <div className="pr-1 ml-2 today-price-su" style={{ flex: "1" }}>
            <p className="today-price-su-p1 my-2 mb-0">
             
            {Language.translation.tournament_price? Language.translation.tournament_price: "TODAY’S TOURNAMENT PRIZE !" }

            </p>
            <p className="today-price-su-p2 my-2 mb-0">{todayPrize?.contest_details?.contest_title}</p>
            <p className="today-price-su-p3 my-2 mb-0">
            {Language.translation.chance_to_win? Language.translation.chance_to_win: "Get a chance to win 2022 - " }    
              {todayPrize?.contest_details?.contest_title} {Language.translation.sponsored_by? Language.translation.sponsored_by: " - Sponsored by" }  &nbsp;
             {todayPrize?.supplier?.supplier_details?.supplier_title}
            </p>
            <p className="today-price-su-p4 my-2 mb-0">
              {todayPrize?.contest_details?.contest_prize_description}
            </p>

            <hr
              className="my-2"
              style={{ backgroundColor: "#30AEBA", height: "0.968021pxpx" }}
            />
            <div className="m-0 p-0 d-flex ">
              <span className="today-price-su-p5 mr-2 ">  {Language.translation.our_partners? Language.translation.our_partners: "OUR PARTNERS" }  </span>
              <div className="today-prize-card-bottom-ads">
                <img
                  className="mr-1 today-prize-card-bottom-ads "
                  src={todayPrize?.supplier?.image}
                  alt=""
                />
                <img
                  className=" today-prize-card-bottom-ads"
                  src={todayPrize?.supplier?.logo}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            className={`mr-2 mt-2  today-prize-card-left-ad  ${RightAdSize}`}
          >
            <img style={{ height: "100%", width: "100%" }} src={todayPrize?.prize_image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
