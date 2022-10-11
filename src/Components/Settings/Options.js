import React, { useEffect } from "react";
import { VscUnmute, VscMute } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkUI, toggleMuted } from "Components/Settings/SettingsSlice";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import useSound from "use-sound";
import TurnOnDarkUI from "Assets/TurnOnDarkUI.mp3";
import TurnOffDarkUI from "Assets/TurnOffDarkUI.mp3";

function updateLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export default function Options() {
  const Muted = useSelector((state) => state.settings.Muted);
  const DarkUI = useSelector((state) => state.settings.DarkUI);
  const [SoundTurnOnDark] = useSound(TurnOnDarkUI, { volume: 0.8 });
  const [SoundTurnOffDark] = useSound(TurnOffDarkUI, { volume: 0.8 });
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("DarkUI") === "true") {
      dispatch(toggleDarkUI());
    }
    if (localStorage.getItem("Muted") === "true") {
      dispatch(toggleMuted());
    }
  }, [dispatch]);

  return (
    <div className="Settings__Options">
      <button
        className={`Button ${Muted ? "Button--Inactive" : "Button--Active"}`}
        onClick={() => {
          dispatch(toggleMuted());
          updateLocalStorage("Muted", !Muted);
        }}
        aria-label={Muted ? "Unmute" : "Mute"}
      >
        {Muted ? <VscMute /> : <VscUnmute />}
      </button>
      <button
        className={`Button ${DarkUI ? "Button--Inactive" : "Button--Active"}`}
        onClick={() => {
          dispatch(toggleDarkUI());
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
