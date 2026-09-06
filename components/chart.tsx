"use client";

import { Pie, PieChart, ResponsiveContainer, Legend } from "recharts";

type Props = {
  income: number;
  expense: number;
};

type LabelProps = {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  percent?: number;
};

const Chart = ({ income, expense }: Props) => {
  const data = [
    {
      name: "Income",
      value: income,
      fill: "#4285f5",
    },
    {
      name: "Expense",
      value: expense,
      fill: "#ef4444",
    },
  ];

  const renderLabel = ({
    cx = 0,
    cy = 0,
    midAngle = 0,
    innerRadius = 0,
    outerRadius = 0,
    percent = 0,
  }: LabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);

    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="45%"
          outerRadius={100}
          label={renderLabel}
          labelLine={false}
        />

        <Legend iconType="circle" position="bottom" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
