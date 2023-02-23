import "./App.css";
import InfoLayout from "./layout/info";
import MessageLayout from "./layout/message";
import ScreenLayout from "./layout/screen";
import MenuLayout from "./layout/menu";
import "./layout/constants/index.css"

function App() {
  return (
    <div className="App">
      <MenuLayout Label= "" />
      <ScreenLayout Label="Screen Layout" />
      <MessageLayout Label="Message Layout" />
      <InfoLayout Label="Info Layout"/>
    </div>
  );
}

export default App;
