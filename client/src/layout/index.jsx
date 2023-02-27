import "./index.css";
import MenuLayout from "./menu";
import ScreenLayout from "./screen";
import MessageLayout from "./message";
import InfoLayout from "./info";

function Home() {
  return (
    <div className="Home">
      <MenuLayout Label="" />
      <ScreenLayout Label="Screen Layout" />
      <MessageLayout Label="Message Layout" />
      <InfoLayout Label="Info Layout" />
    </div>
  );
}

export default Home;
