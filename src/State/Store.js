import { configureStore } from "@reduxjs/toolkit";
import SettingsReducer from "./Features/SettingsSlice";
import AnalyticsReducer from "./Features/AnalyticsSlice";
import TextboxReducer from "./Features/TextboxSlice";
import KeyboardReducer from "./Features/KeyboardSlice";
import TimerReducer from "./Features/TimerSlice";
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
