import "./App.css";
import InfoLayout from "./layout/info";
import MessageLayout from "./layout/message";
import ScreenLayout from "./layout/screen";
import MenuLayout from "./layout/menu";
import "./layout/constants/index.css";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8900");

function App() {
  socket.emit("TestEmit--client", "HelloServer");
  return (
    <div className="App">
      <MenuLayout Label="" />
      <ScreenLayout Label="Screen Layout" />
      <MessageLayout Label="Message Layout" />
      <InfoLayout Label="Info Layout" />
    </div>
  );
}

export default App;
