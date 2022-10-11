import { configureStore } from "@reduxjs/toolkit";
import SettingsReducer from "../Components/Settings/SettingsSlice";
import AnalyticsReducer from "../Components/Analytics/AnalyticsSlice";
import TextboxReducer from "../Components/TextBox/TextboxSlice";
import KeyboardReducer from "../Components/Keyboard/KeyboardSlice";
import TimerReducer from "../Components/Timer/TimerSlice";
export default configureStore({
  reducer: {
    settings: SettingsReducer,
    analytics: AnalyticsReducer,
    textbox: TextboxReducer,
    keyboard: KeyboardReducer,
    timer: TimerReducer,
  },
  devTools: true,
});
