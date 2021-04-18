import React from "react";
import Game from './Game'
import "./LeftPane.css";

const LeftPane = () => {
  const [width, height] = [26, 24]
  const leftPaneStlyles = {
    width: `calc(20px * ${width})`,
    height: `calc(20px * ${height})`
  }
  const game = new Game(width, height)
  game.draw()
    return <div className="leftPane" style={leftPaneStlyles}>{
      game.drawWorld()
  }</div>;
};

export default LeftPane;
