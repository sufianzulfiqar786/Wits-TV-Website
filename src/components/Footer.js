import React from "react";
import Footerr from "../assets/images/PlayerScreen/Footer.svg";
import "../assets/css/PlayerSubScreen.css";
import back from "../assets/images/Common/back.svg";
import start from "../assets/images/Common/start.svg";
import next from "../assets/images/Common/next.svg";
import { Link } from "react-router-dom";

const Footer = ({
  BackPage,
  NextPage,
  BackText,
  setNextNav,
  nextNav,
  state,
  backClick,
  loading = false,
  disable=false,
  onClickStart,
  loadingStart,
  disableNext=false,
  disableStart=true
}) => {
  const signout = () => {
    localStorage.removeItem("count");
    window.location.reload();
  };
  const jsonString = localStorage.getItem("Language");

  // Parse JSON data back into a JavaScript object
  const Language = JSON.parse(jsonString);

  return (
    <>
      <div className="row pt-2">
        <div className="col-12 px-0 ">
          <hr className="player-screen-body-text-line mt-3 " />
        </div>
        <div className="col-12 ">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-12" style={{ width: "100%" }}>
              <img
                className=""
                style={{ width: "100%" }}
                src={Footerr}
                alt=""
              />
            </div>
            {nextNav == 2 ? null : (
              <div className="col-lg-5 col-md-12 pr-0 pl-0 mb-3">
                <div
                  className="footer-background footer mr-2"
                  style={{
                    border: "1.5px solid #D6A15E",
                    borderRadius: "12px",
                  }}
                >
                  <div className="row px-4 py-2">
                    <div className="col-4 py-2 px-4" style={{ width: "100%" }}>
                      <Link to={BackPage}>
                        <button
                        onClick={backClick}
                          style={{
                            width: "100%",
                            borderRadius: "84px",
                            height: "55px",
                            color: "#D6A15E",
                            fontWeight: "700",
                            background: "rgba(0, 0, 0, 0.3)",
                            border: "1.5px solid #D6A15E",
                          }}
                        >
                          {BackText ? (
                            <i class="fa fa-home" aria-hidden="true"></i>
                          ) : (
                            <img
                              style={{ height: "29%", marginBottom: "2%" }}
                              src={back}
                              alt=""
                            />
                          )}
                          <span className="ml-2">
                            {BackText ? (
                              <span onClick={signout}>
                                {Language.translation
                                  ? Language.translation.back
                                  : "back"}
                              </span>
                            ) : Language.translation ? (
                              Language.translation.back
                            ) : (
                              "back"
                            )}
                          </span>
                        </button>
                      </Link>
                    </div>

                    <div className="col-4 py-2 px-1" style={{ width: "100%" }}>
                      <Link to="#">
                        <button
                        onClick={onClickStart}
                        disabled={disableStart}
                          style={{
                            width: "100%",
                            borderRadius: "84px",
                            height: "55px",
                            color: "white",
                            fontWeight: "700",
                            background:
                              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4125) 100%), #D6A15E",
                            border: "1.5px solid #D6A15E",
                          }}
                        >
                        
                          {loadingStart ? (
                            <span class="loader"></span>
                          ) : (
                            <span>
                            {Language.translation? Language.translation.start : "START" }
                            <img
                              className="ml-2"
                              style={{ height: "29%", marginBottom: "2%" }}
                              src={start}
                              alt=""
                            />
                          </span>
                          )}
                        </button>
                      </Link>
                    </div>

                    <div className="col-4 py-2 px-4" style={{ width: "100%" }}>
                      <Link to={NextPage} state={{ state }}>
                        <button
                          onClick={setNextNav}
                          disabled={disableNext}
                          style={{
                            width: "100%",
                            borderRadius: "84px",
                            height: "55px",
                            color: "#D6A15E",
                            fontWeight: "700",
                            background: "rgba(0, 0, 0, 0.3)",
                            border: "1.5px solid #D6A15E",
                          }}
                        >
                          {loading ? (
                            <span class="loader"></span>
                          ) : (
                            <span>
                              {Language.translation
                                ? Language.translation.next
                                : "NEXT"}
                              <img
                                className="ml-2"
                                style={{ height: "29%", marginBottom: "2%" }}
                                src={next}
                                alt=""
                              />
                            </span>
                          )}
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center pb-1">
                    <p className="footer-text">
                      {" "}
                      {Language.translation.placeholder_helper
                        ? Language.translation.placeholder_helper
                        : "Placeholder for contextual helping tips"}{" "}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
