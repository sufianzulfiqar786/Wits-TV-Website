import React, { useEffect, useRef, useState } from "react";
import "../../assets/css/style.scss";
import "../../assets/css/challange.scss";
import Host from "../Host";
import sampleImg1 from "../../assets/images/PlayerScreen/myPic.jpg";
import sampleImg2 from "../../assets/images/PlayerScreen/myPic1.png";
import crown from "../../assets/images/PlayerScreen/crown.svg";
import Option from "./option";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import { useNavigate } from "react-router";
import socketIo from "../../helper/sockerManager";

const Qauestions = ({
  selectedIndex1,
  selectedIndex2,
  userProfile1,
  userProfile2,
  question,
  playAnim,
  correctAns,
}) => {
 
  // useEffect(()=>{
  // },[])
  // console.log("key", updateKey.current);
  // useEffect(() => {
  //   if ((timeComplete || true) && updateKey.current < 5) {
  //     handleupdateKey();
  //     console.log("key", "Run again useEffect");
  //   } else {
  //     navigate("/leaderboard");
  //   }
  // }, [timeComplete]);

  return (
    <>
      <AnimateGroup play key={playAnim}>
        <div className="row mt-5">
          <div className="col-12 mb-2 ">
            <div
              className="row mx-4  d-flex justify-content-center"
              style={{
                fontSize: "1.57vw",
                height: "100%",
                border: "1.4px solid orange",
                borderRadius: "12px",
              }}
            >
              <p className="p-3 text-center text-light question-text">
                {question?.firstLanguage?.translation}
              </p>
            </div>
          </div>

          <div className="col-12">
            <div className="row px-4 my-3">
              <div className="col-6 mb-3">
                <Animate
                  start={{ opacity: 0 }}
                  end={{ opacity: 1 }}
                  sequenceIndex={0}
                  duration={1}
                  delay={1.5}
                >
                  <Option
                    isSelected1={selectedIndex1 == 1 ? true : false}
                    isSelected2={selectedIndex2 == 1 ? true : false}
                    userProfile1={userProfile1}
                    userProfile2={userProfile2}
                    correctAns={correctAns == 1}
                    opt={question?.firstLanguage?.option_a}
                  />
                </Animate>
              </div>
              <div className="col-6 mb-3">
                <Animate
                  start={{ opacity: 0 }}
                  end={{ opacity: 1 }}
                  sequenceIndex={1}
                  duration={0.5}
                >
                  <Option
                    isSelected1={selectedIndex1 == 2 ? true : false}
                    isSelected2={selectedIndex2 == 2 ? true : false}
                    correctAns={correctAns == 2}

                    userProfile1={userProfile1}
                    userProfile2={userProfile2}
                    opt={question?.firstLanguage?.option_b}
                  />
                </Animate>
              </div>
              <div className="col-6 mb-3">
                <Animate
                  start={{ opacity: 0 }}
                  end={{ opacity: 1 }}
                  sequenceIndex={2}
                  duration={0.5}
                >
                  <Option
                    isSelected1={selectedIndex1 == 3 ? true : false}
                    isSelected2={selectedIndex2 == 3 ? true : false}
                    correctAns={correctAns == 3}

                    userProfile1={userProfile1}
                    userProfile2={userProfile2}
                    opt={question?.firstLanguage?.option_c}
                  />
                </Animate>
              </div>
              <div className="col-6 mb-3">
                <Animate
                  start={{ opacity: 0 }}
                  end={{ opacity: 1 }}
                  sequenceIndex={3}
                  duration={0.5}
                >
                  <Option
                    isSelected1={selectedIndex1 == 4 ? true : false}
                    isSelected2={selectedIndex2 == 4 ? true : false}
                    correctAns={correctAns == 4}

                    userProfile1={userProfile1}
                    userProfile2={userProfile2}
                    opt={question?.firstLanguage?.option_d}
                  />
                </Animate>
              </div>
            </div>
          </div>

          <div
            className="col-12 position-absolute text-light"
            style={{
              top: "84.5%",
              left: "52.88%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* <Host /> */}
          </div>
        </div>
      </AnimateGroup>
    </>
  );
};

export default Qauestions;
