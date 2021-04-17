import React from "react";
import "./LeftPane.css";
const LeftPane = () => {
  const grid = new Array(24 * 26).fill(<div className="gridBox"></div>);
  console.log(grid);
  return <div className="leftPane">{grid}</div>;
};

export default LeftPane;
