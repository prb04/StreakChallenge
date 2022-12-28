import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";

const data = [
  {
    name: "Organic Search",
    Sessions: 4000,
    BounceRate: 2400,
    amt: 2400,
  },
  {
    name: "Direct",
    Sessions: 3000,
    BounceRate: 1398,
    amt: 2210,
  },
  {
    name: "Paid Search",
    Sessions: 2000,
    BounceRate: 3241,
    amt: 2290,
  },
  {
    name: "Social",
    Sessions: 2780,
    BounceRate: 3908,
    amt: 2000,
  },
  {
    name: "Referral",
    Sessions: 1890,
    BounceRate: 4800,
    amt: 2181,
  },
  {
    name: "Email",
    Sessions: 2390,
    BounceRate: 3800,
    amt: 2500,
  },
];

const BarGraph = () => {
  return (
    <div className="pt-5 bg-[#050129]">
      <div className="p-3">
        <h1 className="text-xl font-semibold">
          Sessions and bounce rate by Channel
        </h1>
        <p className="text-sm text-white/40">last 30 days</p>
      </div>
      <div className="flex justify-center w-full">
        <BarChart width={600} height={400} data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
            vertical={false}
          />
          <XAxis dataKey="name" />

          <Tooltip />
          <Legend />
          <Bar dataKey="Sessions" fill="#00FFFF">
            <LabelList dataKey="Sessions" position="top" />
          </Bar>
          <Bar dataKey="BounceRate" fill="#8F00FF">
            <LabelList dataKey="BounceRate" position="top" />
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default BarGraph;
