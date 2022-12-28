import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "United States",
    Sessions: 23000,
    BounceRate: 13000,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "India",
    Sessions: 4700,
    BounceRate: 2300,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "United Kingdom",
    Sessions: 3200,
    BounceRate: 2000,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Canada",
    Sessions: 2300,
    BounceRate: 1423,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Germany",
    Sessions: 1200,
    BounceRate: 800,
    amt: 1100,
    cnt: 460,
  },
];

export default function VerticalBarGraph() {
  return (
    <div className="bg-[#050129]">
      <div className="p-3">
        <h1 className="text-xl font-semibold">
          Sessions & Bounce rate - Top 5 Countries
        </h1>
        <p className="text-sm text-white/40">last 30 days</p>
      </div>
      <div className=" flex justify-center w-full">
        <ResponsiveContainer width="90%" height={400}>
          <ComposedChart
            layout="vertical"
            width={700}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid
              stroke="#f5f5f5"
              horizontal={false}
              vertical={false}
            />
            <XAxis type="number" tick={false} axisLine={false} />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip />
            <Legend />

            <Bar dataKey="Sessions" barSize={20} fill="#00FFFF">
              <LabelList
                style={{ textColor: "white" }}
                dataKey="Sessions"
                position="right"
              />
            </Bar>
            <Bar dataKey="BounceRate" barSize={20} fill="#8F00FF">
              <LabelList dataKey="BounceRate" position="right" />
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
