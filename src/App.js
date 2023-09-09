import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./App.scss";
import Splash from "./components/Splash/splash";
import PlayerMainScreen from "./pages/PlayerMainScreen";
import TodayPrize from "./pages/TodayPrize";
import PlayerWaitingScreen from "./pages/PlayerWaitingScreen";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Challange from "./pages/Challange";
import LeaderBoard from "./pages/LeaderBoard";
import { useEffect, useState } from "react";
import Signin from "./pages/Signin";
import socketIo from "../src/helper/sockerManager";
import io from "socket.io-client";
import "../src/assets/css/style.scss";
import SelectLanguage from "./pages/SelectLanguage";

function App() {
  // const socket = io('https://gc-engine.winwithwits.com');

  // const screenWidth = window.innerWidth;
  // useEffect(() => {

  //   socket.on('connect', () => {
  //     console.log('Socket connected');
  //   });

  // }, []);
  const [token, setToken] = useState();

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    // setToken(localStorage.getItem("count"));

    const handleResize = () => setIsWideScreen(window.innerWidth >= 1000);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
     

      {window.innerWidth >= 1000 ? (
        <BrowserRouter>
          <Routes>
            <Route path="/playerscreen" element={<PlayerMainScreen />} />
            <Route
              path="/playerwaiting"
              element={<PlayerWaitingScreen />}
            />
            <Route path="/" element={<Splash />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/languageselector" element={<SelectLanguage />} />
            <Route path="/today-prize" element={<TodayPrize />} />
            <Route path="/challange" element={<Challange />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/*" element={<SelectLanguage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "100%",
            height: "100vh",
            background:
              "radial-gradient(88.22% 88.22% at 50% 0%, rgba(11, 90, 98, 0.8) 0%, rgba(7, 67, 75, 0) 100%), #000B0C",
          }}
        >
          <h1 className="text-light text-center">
            This platform is optimized to operate on bigger screens due to
            streaming capabilities. If you think this is an error, contact
            technical support with the details of your device such as screen
            size, OS
          </h1>
        </div>
      )}
    </>
  );
}

export default App;
