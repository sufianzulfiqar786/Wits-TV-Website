import React from "react";
import Earth from "../../assets/images/PlayerWaiting/Earth.svg";
import sampleImg1 from "../../assets/images/PlayerScreen/myPic.jpg";
import pak from "../../assets/images/PlayerScreen/pak.svg";
import dia from "../../assets/images/PlayerScreen/dia.svg";
import crown from "../../assets/images/PlayerScreen/crown.svg";
import HeaderLogo from "../../assets/images/PlayerScreen/HeaderLogo.svg";
import { useNavigate } from "react-router-dom";

const WaitingGroupList = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
  ];

  const navigate = useNavigate();

  const moveToNext = () => {
    // navigate("/challange");
  };

  return (
    <>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-12 d-flex justify-content-center mt-2">
          <img className=" player-waiting-main-Earth" src={Earth} alt="" />
        </div>

        <div className="col-12  d-flex justify-content-center">
          <p className="player-waiting-main-text mb-2" onClick={moveToNext}>
            Waiting for players...
          </p>
        </div>

        <div className="col-12">
          <div className="row text-light">
            <div className="col-lg-6 col-md-6 col-6 mb-2 mt-1 ">
              <div className="player-screen-body-border">
                <div className="row ">
                  <div className="col-3 position-relative ">
                    <img
                      className="player-screen-card-profile m-2"
                      src={sampleImg1}
                      alt=""
                    />

                    <div className="position-absolute player-waiting-card-crown">
                      <img src={crown} alt="" />
                    </div>
                  </div>

                  <div className="col-9">
                    <div className="player-waiting-card-div1">
                      <img src={pak} alt="" />{" "}
                      <span className="player-waiting-card-text1 text-light">
                        asdas
                      </span>
                    </div>

                    <div className="player-waiting-card-div2">
                      <img src={dia} alt="" />{" "}
                      <span className="player-waiting-card-text2 text-light">
                        asd
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {data &&
              data.map(() => {
                return (
                  <div className="col-lg-6 col-md-6 col-6 mb-2 mt-1 ">
                    <div className="player-screen-body-border">
                      <div className="row ">
                        <div className="col-3 position-relative ">
                          <img
                            className="player-screen-card-profile-quest m-2"
                            src={sampleImg1}
                            alt=""
                          />
                        </div>

                        <div className="col-9  d-flex justify-content-center align-items-center ">
                          <p className="player-waiting-question-mark mr-5 mb-1">
                            ?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  //                                                 <div className="col-lg-6 col-md-6 col-6 mb-2 mt-1">

                  //                                                     <div className="player-screen-body-border" >

                  //                                                         <div className="row ">

                  //                                                             <div className="col-3 position-relative ">
                  //                                                                 <img className='player-screen-card-profile-question-mark m-1' src={HeaderLogo} alt="" />

                  //                                                                 {/* <div className='position-absolute player-waiting-card-crown'>
                  // <img src={crown} alt="" />
                  // </div> */}

                  //                                                             </div>

                  //                                                             <div className="col-9  d-flex justify-content-center align-items-center">

                  //                                                                 <p className='player-waiting-question-mark mr-5 mt-2'>?</p>

                  //                                                             </div>

                  //                                                         </div>

                  //                                                     </div>

                  //                                                 </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingGroupList;
