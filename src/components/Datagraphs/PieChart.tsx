import { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const data = [
  { name: "Wheat", value: 400 },
  { name: "Corn", value: 300 },
  { name: "Rice", value: 300 },
  { name: "Barley", value: 200 },
];

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g className="font-montserrat">
      {/* Draw the main Pie Slice */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        className="drop-shadow-lg"
      />

      {/* Add an outer highlight sector */}
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
        className="opacity-40"
      />

      {/* Line extending from the Pie Slice */}
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />

      {/* Small circle at the end of the line */}
      <circle cx={ex} cy={ey} r={2} fill={fill} />

      {/* Label for the percentage */}
      <text
        x={ex + (cos >= 0 ? 12 : -12)}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        className="font-semibold"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>

      {/* Label for the crop name and value */}
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill="#333"
        className="text-lg font-bold"
      >
        {`${payload.name}: ${value}`}
      </text>
    </g>
  );
};

const CustomPieChart = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md font-montserrat">
      <h2 className="text-center text-xl font-bold mb-4 font-raleway">
        CROP DISTRIBUTION
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#84C318"
            dataKey="value"
            onMouseEnter={onPieEnter}
            className="cursor-pointer"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
