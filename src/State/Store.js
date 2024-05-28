import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import SettingsReducer from "../Components/Settings/SettingsSlice";
import AnalyticsReducer from "../Components/Analytics/AnalyticsSlice";
import TextboxReducer from "../Components/TextBox/TextboxSlice";
import KeyboardReducer from "../Components/Keyboard/KeyboardSlice";
import TimerReducer from "../Components/Timer/TimerSlice";
import thunkMiddleware from "redux-thunk";

const reducer = {
  settings: SettingsReducer,
  analytics: AnalyticsReducer,
  textbox: TextboxReducer,
  keyboard: KeyboardReducer,
  timer: TimerReducer,
};

export default configureStore({
  reducer,
  devTools: true,
  enhancers: [applyMiddleware(thunkMiddleware)],
});
