import React, { useState } from "react";
import TimerBackground from "../../assets/images/Challange/counter.svg";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer({timerPlaying,setTimeComplete,key}) {
  
  return (
    <div style={{ position: "relative" }}>
      <img src={TimerBackground} />
      <div className="count-digit">
        <CountdownCircleTimer
          key={key}
          isPlaying={timerPlaying}
          duration={10}
          colors={["#D6A15E"]}
          size={55}
          strokeWidth={5}
          // trailColor={["#D9D9D9"]}
          onComplete={() => {
            // setUpdateKey(counter.current + 1);
            setTimeout(() => setTimeComplete(Math.random()), 200);

            console.log('key',"timer complete")
            // counter.current = counter.current + 1;
            return { delay: 1 };
          }}
          onUpdate={()=>{}}
        >
          {({ remainingTime, elapsedTime }) => {
            //handleTimer(Math.floor(elapsedTime));

            return (
              <span style={{ color: "#D6A15E", fontSize: 30 }}>
                {remainingTime}
              </span>
            );
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
