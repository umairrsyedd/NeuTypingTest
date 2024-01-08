import Settings from "Components/Settings";
import Analytics from "Components/Analytics";
import TextBox from "Components/TextBox";
import Keyboard from "Components/Keyboard";
import Profile from "Components/Profile/Profile";
import "./Home.css";
import { connect } from "react-redux";

function Home({ darkUI }) {
  return (
    <div className="Home__Wrapper" data-theme={`${darkUI ? "Dark" : ""}`}>
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

function mapStateToProps(state) {
  return {
    darkUI: state.settings.DarkUI,
    muted: state.settings.Muted,
  };
}

export default connect(mapStateToProps)(Home);
