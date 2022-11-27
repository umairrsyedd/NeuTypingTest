import Settings from "Components/Settings";
import Analytics from "Components/Analytics";
import TextBox from "Components/TextBox";
import Keyboard from "Components/Keyboard";
import Profile from "Components/Profile/Profile";
import { GlobalHotKeys } from "react-hotkeys";
import { KeyMap } from "Utils/KeyMap";
import { resetTest } from "./HomeSlice";
import {
  changeMode,
  toggleDarkUI,
  toggleMuted,
} from "Components/Settings/SettingsSlice";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import useToast from "Hooks/useToast";
import "./Home.css";
import "react-toastify/dist/ReactToastify.css";

function Home({ resetTest, changeMode, toggleDarkUI, toggleMuted, darkUI }) {
  const toast = useToast();

  const handlers = {
    RESET: () => {
      resetTest();
      toast("reset");
    },
    PRACTICE_MODE: () => changeMode("Practice"),
    TEST_MODE: () => changeMode("Test"),
    DARK_UI: () => {
      toggleDarkUI();
      toast("dark");
    },
    MUTE: () => toggleMuted(),
    ESC: () => document.getElementsByClassName("TextBox")[0].blur(),
  };
  return (
    <GlobalHotKeys keyMap={KeyMap} handlers={handlers}>
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
        <ToastContainer
          autoClose={250}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          closeButton={false}
        />
      </div>
    </GlobalHotKeys>
  );
}

function mapStateToProps(state) {
  return {
    darkUI: state.settings.DarkUI,
    muted: state.settings.Muted,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetTest: () => dispatch(resetTest()),
    changeMode: (mode) => dispatch(changeMode(mode)),
    toggleDarkUI: () => dispatch(toggleDarkUI()),
    toggleMuted: () => dispatch(toggleMuted()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
