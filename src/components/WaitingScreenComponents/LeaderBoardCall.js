import React, { useEffect, useRef, useState } from "react";
import mute from "../../assets/images/PlayerWaiting/mute.svg";
import pak from "../../assets/images/PlayerScreen/pak.svg";
import "../../assets/css/style.scss";
import Rive, { Fit } from "@rive-app/react-canvas";
import World from "../../assets/images/PlayerWaiting/world_rotate_web.riv";

import { useParams } from "react-router";
import '../../assets/css/leaderboardcall.css'
import {
  LiveKitRoom,
  AudioRenderer,
  VideoRenderer,
  useRoom,
  useParticipant,
  AudioSelectButton,
  ControlButton,
  VideoSelectButton,
} from "@livekit/react-components";
import WaitingCall from "./WaitingCall";
// import { AudioSelectButton, ControlButton, VideoSelectButton } from '@livekit/react-components';

const WaitingGroupCall = ({iswidth,videoWidth}) => {
  /** Subscription Token (required) */
  const [videoToken,setVideoToken]=useState();
  const isMutedAuth = useRef(false);

  /** Livekit Server Link */
  const url = "wss://gc-engine.winwithwits.com";

  /** Hooks for GC ( livekit ) Removing these won't render videos but you will still join
   * room with video & audio track published
   */
  // const {token}=useParams()
  useEffect(()=>{
    setVideoToken(localStorage.getItem("videoToken"))
  },[])
  const Stage = () => {
    const { room, isConnecting, participants, audioTracks } = useRoom({
      adaptiveStream: true,
      dynacast: true,
    });

    // the position of AudioRenderer in the DOM is not super important
    return (
      <div>
        {audioTracks.map((t) => {
          <AudioRenderer track={t} isLocal={true} />;
        })}

        {participants.map((p) => (
          <ParticipantView participant={p} />
        ))}
      </div>
    );
  };
  const toggleMute = () => {
    isMutedAuth.current = !isMutedAuth.current;
    console.log("room3", isMutedAuth);
    console.log("room3 test");
  };
  const ParticipantView = ({ participant }) => {
    // isSpeaking, connectionQuality will update when changed
    const { isSpeaking, connectionQuality, isLocal, cameraPublication } =
      useParticipant(participant);

      /** Not to return VideoRenderer if not local */
      // if(!isLocal){
      //   return <span></span>;
      // }
console.log(participant)
    console.log("room3", isMutedAuth);
    if (cameraPublication?.isMuted ?? true) {
      return (
       <WaitingCall name={participant?.identity.length>7?`${participant?.identity.slice(0,6)}...`:participant?.identity}  fromLeaderBoard={videoWidth?false: true}/>
      );
    }

    // user is not subscribed to track, for when using selective subscriptions
    if (!cameraPublication.isSubscribed) {
      return (
       <WaitingCall name={participant?.identity.length>7?`${participant?.identity.slice(0,6)}...`:participant?.identity} fromLeaderBoard={videoWidth?false:true}/>
      );
    }

    /** Return the stream/video */

    return (
      <div className={`video-card-leader position-relative ${videoWidth}`}>
        <div  className={`${isLocal?"border-video":""} border-video-all`}>
        <VideoRenderer
          height={"162px"}
          width={iswidth?"100%":'80%'}
          objectFit="cover"
          track={cameraPublication.track}
          isLocal={isLocal}
         
        />
        </div>

        <div
          className=" controlSection  d-flex align-items-center justify-content-center "
          style={{ width: "65%" }}
        >
          <div
            className="row     controlSectionSub d-flex align-items-center justify-content-center"
            style={{ width: "93%" }}
          >
            <div className="col-9 pl-3 ">
              <div className=" country-name">
              <span
                // className={`fi fi-${flag?.toLowerCase()}`}
              ></span>
                <span
                  className="pl-3 caller-name"
                >
                  {isLocal?"Host": participant?.identity.length>7?`${participant?.identity.slice(0,6)}...`:participant?.identity}
                </span>
              </div>
            </div>
            <div className="col-3   d-flex justify-end">
              <img className="ml-4" src={mute} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="row p-3">
        <LiveKitRoom
          url={url}
          token={videoToken}
          participantRenderer={ParticipantView}
          onConnected={(room) => onConnected(room, isMutedAuth)}
          // stageRenderer={Stage}
          controlRenderer={(props) => {
            /** Control Section where You can render mute buttons etc. */
            return (
              <>
                <h1></h1>
              </>
            );
          }}
        />
      </div>
    </>
  );
};

/** GC Connection Handler Don't Make Any Changes in It. */
async function onConnected(room, isMutedAuth) {
  await room.localParticipant.setCameraEnabled(true);
  await room.localParticipant.setMicrophoneEnabled(true);
}

export default WaitingGroupCall;
