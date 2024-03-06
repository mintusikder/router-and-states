import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Dasbord = () => {
  const data = [
    { id: 1, name: "Student 1", physics: 85, chemistry: 78, math: 92 },
    { id: 2, name: "Student 2", physics: 90, chemistry: 88, math: 95 },
    { id: 3, name: "Student 3", physics: 78, chemistry: 85, math: 89 },
    { id: 4, name: "Student 4", physics: 92, chemistry: 80, math: 91 },
    { id: 5, name: "Student 5", physics: 86, chemistry: 92, math: 88 },
    { id: 6, name: "Student 6", physics: 89, chemistry: 85, math: 93 },
    { id: 7, name: "Student 7", physics: 94, chemistry: 91, math: 87 },
    { id: 8, name: "Student 8", physics: 82, chemistry: 89, math: 90 },
    { id: 9, name: "Student 9", physics: 87, chemistry: 93, math: 94 },
    { id: 10, name: "Student 10", physics: 91, chemistry: 87, math: 96 },
    { id: 11, name: "Student 11", physics: 88, chemistry: 84, math: 98 },
    { id: 12, name: "Student 12", physics: 95, chemistry: 96, math: 85 },
  ];

  return (
    <div>
     
      <LineChart width={500} height={500} data={data}>
        <Line dataKey="chemistry"></Line>
        <Line dataKey="physics"></Line>
        <Line  stroke="#82ca9d" dataKey="math"></Line>
        <XAxis  dataKey="name" />
          <YAxis />
      </LineChart>
    </div>
  );
};

export default Dasbord;
