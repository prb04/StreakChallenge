import React from "react";

const DashBoard = () => {
  const headings = [
    "Sessions",
    "New Users",
    "Bounce Rate",
    "Avg Session Duration",
    "Goal 1 Compl.",
    "Goal 1 CVR",
  ];

  const data = [
    {
      id: 1,
      heading: "Today",
      values: [
        {
          value: "2568",
          bool: true,
        },
        {
          value: "2080",
          bool: true,
        },
        {
          value: "57.4%",
          bool: true,
        },
        {
          value: "126.5sec",
          bool: true,
        },
        {
          value: "37",
          bool: true,
        },
        {
          value: "1.4%",
          bool: true,
        },
      ],
    },
    {
      id: 2,
      heading: "This Week",
      values: [
        {
          value: "10635",
          bool: true,
        },
        {
          value: "8576",
          bool: true,
        },
        {
          value: "61.2%",
          bool: false,
        },
        {
          value: "128.4sec",
          bool: false,
        },
        {
          value: "209",
          bool: false,
        },
        {
          value: "2.0%",
          bool: false,
        },
      ],
    },
    {
      id: 3,
      heading: "This Month",
      values: [
        {
          value: "39489",
          bool: false,
        },
        {
          value: "31750",
          bool: false,
        },
        {
          value: "61.5%",
          bool: false,
        },
        {
          value: "127.9sec",
          bool: false,
        },
        {
          value: "844",
          bool: true,
        },
        {
          value: "2.1%",
          bool: true,
        },
      ],
    },
  ];
  return (
    <div className="bg-[#050129] text-white/50 font-medium py-5 pr-10 text-lg border-b-[16px] border-gray-600">
      <table className="w-full table-fixed pt-5">
        <thead className="">
          <tr className="">
            <th></th>
            {headings.map((heading, index) => {
              return (
                <th key={index} className="p-2 border-b-2">
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="text-center font-medium text-2xl">
          {data.map((x) => (
            <tr key={x.id}>
              <td className="p-4">{x.heading}</td>
              {x.values.map((value, index) => (
                <td key={index} className="border-b-2">
                  <div className="flex justify-center items-center">
                    <p className="w-[100px]">{value.value} </p>
                    {value.bool ? (
                      <div className="border-solid border-b-green-600 border-b-[16px] border-x-transparent border-x-[12px] border-t-0"></div>
                    ) : (
                      <div className="border-solid border-t-red-600 border-t-[16px] border-x-transparent border-x-[12px] border-b-0"></div>
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard;
