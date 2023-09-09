import { getRequest, postRequest } from "./api";
import { DELETE_USER, GAME_WIN_DETAIL, GET_CONTESTANTS, GET_CONTEST_PLAYERS, GET_LANGUAGE, GET_RANDOM_USER, START_CONTEST, START_ROOM, TV_CONTEST, USER_LOGIN } from "./endpoint";


export const loginWithEmail = (data) => postRequest(USER_LOGIN, data);
export const getTvContest=(data)=>getRequest(`${TV_CONTEST}`);
export const getContestants=(data)=>getRequest(`${GET_CONTESTANTS}/${data}`);
export const getRandomUser=(data)=>getRequest(`${GET_RANDOM_USER}/${data}`);
export const getContestPlayers=(data)=>getRequest(`${GET_CONTEST_PLAYERS}/${data}`);
export const getLanguage=(data)=>getRequest(GET_LANGUAGE, data); 
export const getJsonFile=(data)=>getRequest(data); 
export const startContest=(user1,user2,params)=>getRequest(`${START_CONTEST}/${user1}/${user2}}`,params); 
export const startRoom=(data)=>getRequest(`${START_ROOM}/${data}`);
export const deleteUser=(data,params)=>getRequest(`${DELETE_USER}/${data}`,params);
export const gameWinDetail=(params)=>getRequest(GAME_WIN_DETAIL,params);