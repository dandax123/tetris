import React from "react";
import "./App.css";
import LeftPane from "./components/LeftPane/LeftPane";
import RightPane from "./components/RightPane/RightPane";

const App = () => {
  return (
    <div className="App">
      <LeftPane />
      <RightPane />
    </div>
  );
};

export default App;
