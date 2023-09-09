import io from "socket.io-client";

// const SOCKER_URL = "https://socket.testing.winwithwits.com";
// socket.testing.winwithwits.com
const SOCKER_URL = "wss://sockets.winwithwits.com";

const SOCKET_OPTIONS = {
  reconnection: true,
  reconnectionDelay: 10000,
  reconnectionDelayMax: 10000,
  reconnectionAttempts: 10,
  // transports: ["websocket"],
};

class sockerManager {
  intializeSocket = async () => {
    try {
      this.socket = io(SOCKER_URL, SOCKET_OPTIONS);
      console.log("intializing socket===>", socketIo);

      this.socket.on("connect", (data) => {
        console.log("<====socket connected====>");
      });

      this.socket.on("disconnect", (data) => {
        console.log("<===socket disconnected===>");
      });

      this.socket.on("reconnect", (data) => {
        console.log("<===socket reconnecting===>");
      });

      this.socket.on("error", (data) => {
        console.log("<===socket error ===>", data);
      });
    } catch (error) {
      console.log("socket catch error==>", error);
    }
  };

  emit(event, data) {
    console.log("emit event is==>", event, "and args are==>", data);
    this.socket.emit(event, data);
  }

  on(event, callback) {
    this.socket.on(event, callback);
  }

  removeSocketListener(listenerName) {
    this.socket.removeSocketListener(listenerName);
  }
  disconnect() {
    console.log("here in disconnect");
    this.socket.disconnect();
  }
}

const socketIo = new sockerManager();
export default socketIo;
