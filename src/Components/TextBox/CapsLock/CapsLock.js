import React from "react";
import { useSelector } from "react-redux";
import "./CapsLock.css";

export default function CapsLock() {
  const isCapsLock = useSelector((state) => state.keyboard.isCapsLock);
  return <>{isCapsLock ? <div className="capsLock">CAPS LOCK</div> : <></>}</>;
}
