import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import SettingsReducer from "../Components/Settings/SettingsSlice";
import AnalyticsReducer from "../Components/Analytics/AnalyticsSlice";
import TextboxReducer from "../Components/TextBox/TextboxSlice";
import KeyboardReducer from "../Components/Keyboard/KeyboardSlice";
import TimerReducer from "../Components/Timer/TimerSlice";
import HomeReducer from "Pages/Home/HomeSlice";
import thunkMiddleware from "redux-thunk";

const reducer = {
  settings: SettingsReducer,
  analytics: AnalyticsReducer,
  textbox: TextboxReducer,
  keyboard: KeyboardReducer,
  timer: TimerReducer,
  home: HomeReducer,
};

export default configureStore({
  reducer,
  devTools: true,
  enhancers: [applyMiddleware(thunkMiddleware)],
});
