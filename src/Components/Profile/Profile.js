import React from "react";
import { connect } from "react-redux";
import Profile__Picture from "Assets/Profile-Picture.webp";
import "./Profile.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import ReactTooltip from "react-tooltip";

function Profile({ DarkUI, isEnded, zenMode }) {
  return (
    <>
      {zenMode && !isEnded ? (
        <></>
      ) : (
        <>
          <ReactTooltip textColor="#f5f0f0" backgroundColor="#26243d" />
          <div className="Home__Profile__Container">
            <div className="Avatar__Container">
              <img
                className="Avatar"
                src={Profile__Picture}
                data-tip="That's Me!"
                alt="Syed Umair"
              ></img>
              <span className="Name" data-tip="Syed Muhammed Umair">
                Syed Umair
              </span>
              <span className="Username" data-tip="My Username Everywhere">
                @umairrsyedd
              </span>
            </div>

            <div className="About__Container"></div>
            <div className="Icons__Container">
              <a
                href="https://www.linkedin.com/in/umairrsyedd/"
                target="_blank"
                data-tip="Linkedin"
                rel="noreferrer"
                aria-label="Linkedin"
              >
                <i className="LinkedIn">
                  <AiFillLinkedin
                    size="2rem"
                    color={`${DarkUI ? "#f5f0f0" : "#26243d"}`}
                  />
                </i>
              </a>
              <a
                href="https://www.github.com/umairrsyedd"
                target="_blank"
                data-tip="Github"
                rel="noreferrer"
                aria-label="Github"
              >
                <i className="Github">
                  <AiFillGithub
                    size="2rem"
                    color={`${DarkUI ? "#f5f0f0" : "#26243d"}`}
                  />
                </i>
              </a>
              <a
                href="https://angel.co/u/umairrsyedd"
                target="_blank"
                data-tip="Angelist"
                rel="noreferrer"
                aria-label="Angelist"
              >
                <i className="Angellist">
                  <FaAngellist
                    size="2rem"
                    color={`${DarkUI ? "#f5f0f0" : "#26243d"}`}
                  />
                </i>
              </a>
              <a
                href="https://www.hashnode.com/@umairrsyedd"
                target="_blank"
                data-tip="Hashnode"
                rel="noreferrer"
                aria-label="Hashnode"
              >
                <i className="HashNodeJs">
                  <SiHashnode
                    size="2rem"
                    color={`${DarkUI ? "#f5f0f0" : "#26243d"}`}
                  />
                </i>
              </a>
            </div>
            <div className="Button Button--Active DesktopHidden">
              Login Via Desktop To Access Neu Typing Test
            </div>
          </div>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    DarkUI: state.settings.DarkUI,
    isEnded: state.timer.isEnded,
    zenMode: state.textbox.zenMode,
  };
};

export default connect(mapStateToProps)(Profile);
