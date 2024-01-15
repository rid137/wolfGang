import { useState } from "react";
import { PieChart, Pie, Sector } from "recharts";


export default function Example ({data}: any) {

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    payload,
    
  } = props;
  
  

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="black">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={payload.bg}
      />
    </g>
  );
};


const [activeIndex, ] = useState(0);
  

  return (
    <PieChart width={150} height={150}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={70}
        cy={70}
        innerRadius={35}
        outerRadius={45}
        fill={data.bg}
        dataKey="value"
        // onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}
