import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "2019-1-21",
    Sessions: 1000,
    NewUsers: 800,
    AvgSessionDuration: 1200,
    amt: 2000,
  },
  {
    name: "2019-1-21",
    Sessions: 1240,
    NewUsers: 1398,
    AvgSessionDuration: 1000,
    amt: 1500,
  },
  {
    name: "2019-1-21",
    Sessions: 1091,
    NewUsers: 1823,
    AvgSessionDuration: 920,
    amt: 1000,
  },
  {
    name: "2019-1-21",
    Sessions: 1402,
    AvgSessionDuration: 1023,
    NewUsers: 987,
    amt: 500,
  },
  {
    name: "2019-1-21",
    Sessions: 1890,
    NewUsers: 1299,
    AvgSessionDuration: 1132,
    amt: 2181,
  },
  {
    name: "2019-1-21",
    Sessions: 1492,
    NewUsers: 1520,
    AvgSessionDuration: 1021,
    amt: 2500,
  },
  {
    name: "2019-1-21",
    Sessions: 807,
    NewUsers: 1832,
    AvgSessionDuration: 1341,
    amt: 2100,
  },
];

export default function Chart() {
  return (
    <div className="bg-[#050129] w-full pt-5">
      <div className="p-3">
        <h1 className="text-xl font-semibold">
          Sessions,Avg Session Duration (in sec) & New Users
        </h1>
        <p className="text-sm text-white/40">last 30 days</p>
      </div>
      <div className="flex justify-center">
        <LineChart
          width={650}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="1 1"
            horizontal={false}
            vertical={false}
          />
          <XAxis height={70} angle={-45} dataKey="name" dx={0} dy={20} />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="bottom" />
          <Line
            type="monotone"
            dataKey="Sessions"
            stroke="#00FFFF"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="NewUsers" stroke="#FF00FF" />
          <Line type="monotone" dataKey="AvgSessionDuration" stroke="#8F00FF" />
        </LineChart>
      </div>
    </div>
  );
}
