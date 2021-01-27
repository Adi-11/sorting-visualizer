import React from "react";
import "./App.css";
import { SortingVisualizer } from "./visualizer/SortingVisualizer";

const App: React.FC<any> = ({}) => {
  return (
    <div className="App">
      <SortingVisualizer />
    </div>
  );
};

export default App;
