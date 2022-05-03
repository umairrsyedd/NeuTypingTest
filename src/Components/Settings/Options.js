import React from "react";
import { VscUnmute, VscMute } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkUI, toggleMuted } from "State/Features/SettingsSlice";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import useSound from "use-sound";
import TurnOnDarkUI from "Assets/TurnOnDarkUI.mp3";
import TurnOffDarkUI from "Assets/TurnOffDarkUI.mp3";

export default function Options() {
  const Muted = useSelector((state) => state.settings.Muted);
  const DarkUI = useSelector((state) => state.settings.DarkUI);
  const dispatch = useDispatch();
  const [SoundTurnOnDark] = useSound(TurnOnDarkUI, { volume: 0.8 });
  const [SoundTurnOffDark] = useSound(TurnOffDarkUI, { volume: 0.8 });
  return (
    <div className="Settings__Options">
      <button
        className={`Button ${Muted ? "Button--Inactive" : "Button--Active"}`}
        onClick={() => {
          dispatch(toggleMuted());
        }}
      >
        {Muted ? <VscMute /> : <VscUnmute />}
      </button>
      <button
        className={`Button ${DarkUI ? "Button--Inactive" : "Button--Active"}`}
        onClick={() => {
          dispatch(toggleDarkUI());
        }}
        onMouseDown={() => {
          if (DarkUI) {
            SoundTurnOffDark();
          } else {
            SoundTurnOnDark();
          }
        }}
      >
        {DarkUI ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </div>
  );
}
