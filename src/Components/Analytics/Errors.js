import React from "react";
import { useSelector } from "react-redux";

export default function Errors() {
  const errors = useSelector((state) => state.analytics.errors);
  return <div className="Button Button--Active">Errors : {errors}</div>;
}
