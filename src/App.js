import React from "react";
import Chart from "./components/Chart";
import BarGraph from "./components/BarGraph";
import VerticalBarGraph from "./components/VerticalBarGraph";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="bg-gray-600 border-[16px] border-gray-600 min-h-screen w-full text-white/80">
      <NavBar />
      <DashBoard />
      <div className="lg:grid lg:grid-cols-2 gap-4">
        <Chart />
        <BarGraph />
        <Chart />
        <VerticalBarGraph />
      </div>
    </div>
  );
};

export default App;
