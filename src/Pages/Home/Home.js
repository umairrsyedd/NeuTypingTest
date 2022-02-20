import React from "react";
import Settings from "Components/Settings";
import Analytics from "Components/Analytics";
import TextBox from "Components/TextBox";
import Keyboard from "Components/Keyboard";
import Timer from "Components/Timer";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="Home--Settings">
        <Settings />
      </div>
      <div className="Home--Main">
        <div className="Home--Main-Container">
          <Analytics />
          <TextBox />
          <Keyboard />
        </div>
      </div>
      <div className="Home--Timer">
        <Timer />
      </div>
    </div>
  );
}
export default Home;
