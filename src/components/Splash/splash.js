import React, { useEffect, useState } from "react";
import Rive, { Fit } from "@rive-app/react-canvas";
import Mandala from "../../assets/images/splash/Mandala_back.svg";
import icon from "../../assets/images/splash/splash_desktop_reduce_size_02a_noClip.riv";
import SplashSound from "../../assets/sounds/splashsound.mp3";
import '../../assets/css/splash.scss'
import { useNavigate } from "react-router-dom";
export default function Splash() {
  const sound = new Audio(SplashSound);
  const [audio, SetAudio] = useState("");

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/languageSelector");
  //   }, 5000);
  // });

  const navigate = useNavigate();

  useEffect(() => { }, []);
  window.onload = () => {
    // console.log("loadededed");
    // document.getElementById("notification").muted = false;
    // document.getElementById("notification").play();
  };

  useEffect(()=>{
setTimeout(() => {
  
  navigate("/languageselector");

}, 5000);
  },[])

  return (
    <div className="splash  " style={{overflowY:"hidden"}}  >
      <audio id="notification" src={SplashSound} muted></audio>
      <div className="splash-cont ">
        <div className="splash-cont-front ">
          <img className="ml-3" style={{width:"102.5%" , height:"102.5%"}} src={Mandala} alt="mandala" />
          <Rive
            src={icon}
            animations={"splash_logo_start"}
            fit={Fit.Contain}
            className="splash-cont-front-logo"
          />
        </div>
      </div>
    </div>
  );
}
