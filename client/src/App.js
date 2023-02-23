import "./App.css";
import InfoLayout from "./layout/info";
import MessageLayout from "./layout/message";
import ScreenLayout from "./layout/screen";
import MenuLayout from "./layout/menu";

function App() {
  return (
    <div className="App">
      <MenuLayout Label="Menu Layout" />
      <ScreenLayout Label="Screen Layout" />
      <MessageLayout Label="Message Layout" />
      <InfoLayout Label="Info Layout"/>
    </div>
  );
}

export default App;
