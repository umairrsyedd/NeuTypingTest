import Settings from "Components/Settings";
import Analytics from "Components/Analytics";
import TextBox from "Components/TextBox";
import Keyboard from "Components/Keyboard";
import Profile from "Components/Profile/Profile";
import { useSelector } from "react-redux";
import "./Home.css";

function Home() {
  const DarkUI = useSelector((state) => state.settings.DarkUI);
  return (
    <div className="Home__Wrapper" data-theme={`${DarkUI ? "Dark" : ""}`}>
      <div className="Home">
        <div className="Home__Settings">
          <Settings />
        </div>
        <div className="Home__Main">
          <div className="Home__Main__Container">
            <Analytics />
            <TextBox />
            <Keyboard />
          </div>
        </div>
        <div className="Home__Profile">
          <Profile />
        </div>
      </div>
    </div>
  );
}
export default Home;
