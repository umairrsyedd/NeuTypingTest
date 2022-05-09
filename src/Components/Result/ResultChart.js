import React from "react";
import { useSelector } from "react-redux";
import "./Result.css";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

export default function ResultChart() {
  const errorsPerChar = useSelector((state) => state.analytics.errorsPerChar);
  const top5Errors = Object.keys(errorsPerChar)
    .map((key) => {
      return {
        name: key,
        Top_Errors: errorsPerChar[key],
      };
    })
    .sort((a, b) => b.Top_Errors - a.Top_Errors)
    .slice(0, 5);

  return (
    <BarChart width={400} height={200} data={top5Errors}>
      <XAxis dataKey="name"></XAxis>
      <YAxis />
      <Tooltip label="" />
      <Legend />
      <Bar dataKey="Top_Errors" fill="#8884d8" />
    </BarChart>
  );
}
