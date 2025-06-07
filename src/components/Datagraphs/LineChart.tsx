import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 7000 },
  { month: "Jul", sales: 6500 },
  { month: "Aug", sales: 7200 },
  { month: "Sep", sales: 5800 },
  { month: "Oct", sales: 6100 },
  { month: "Nov", sales: 4900 },
  { month: "Dec", sales: 7500 },
];

const SalesLineChart = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md font-montserrat">
      <h2 className="text-center text-xl font-bold mb-4 font-raleway">
        SALES TRENDS
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray=" 3 3" className="opacity-50" />
          <XAxis dataKey="month" className="text-gray-500 text-sm" />
          <YAxis className="text-gray-500 text-sm" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "10px",
              border: "1px solid #ddd",
            }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#84C318"
            strokeWidth={3}
            dot={{ r: 5, fill: "#84C318" }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesLineChart;
