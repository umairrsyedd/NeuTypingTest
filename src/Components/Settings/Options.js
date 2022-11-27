import React, { useEffect } from "react";
import { connect } from "react-redux";
import { VscUnmute, VscMute } from "react-icons/vsc";
import { toggleDarkUI, toggleMuted } from "Components/Settings/SettingsSlice";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import useSound from "use-sound";
import TurnOnDarkUI from "Assets/TurnOnDarkUI.mp3";
import TurnOffDarkUI from "Assets/TurnOffDarkUI.mp3";

function updateLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function Options({ Muted, DarkUI, toggleMuted, toggleDarkUI }) {
  const [SoundTurnOnDark] = useSound(TurnOnDarkUI, { volume: 0.8 });
  const [SoundTurnOffDark] = useSound(TurnOffDarkUI, { volume: 0.8 });

  useEffect(() => {
    if (localStorage.getItem("DarkUI") === "true") {
      toggleDarkUI();
    }
    if (localStorage.getItem("Muted") === "true") {
      toggleMuted();
    }
  }, [toggleDarkUI, toggleMuted]);

  return (
    <div className="Settings__Options">
      <button
        className={`Button ${Muted ? "Button--Inactive" : "Button--Active"}`}
        onClick={() => {
          toggleMuted();
          updateLocalStorage("Muted", !Muted);
        }}
        aria-label={Muted ? "Unmute" : "Mute"}
      >
        {Muted ? <VscMute /> : <VscUnmute />}
      </button>
      <button
        className={`Button ${DarkUI ? "Button--Inactive" : "Button--Active"}`}
        onClick={() => {
          toggleDarkUI();
          updateLocalStorage("DarkUI", !DarkUI);
        }}
        onMouseDown={() => {
          if (DarkUI) {
            SoundTurnOffDark();
          } else {
            SoundTurnOnDark();
          }
        }}
        aria-label={DarkUI ? "Turn off dark mode" : "Turn on dark mode"}
      >
        {DarkUI ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Muted: state.settings.Muted,
    DarkUI: state.settings.DarkUI,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMuted: () => dispatch(toggleMuted()),
    toggleDarkUI: () => dispatch(toggleDarkUI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
