import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CallTrendSection = () => {
  const [timeRange, setTimeRange] = useState("This Week");

  // Sample data - tumi nijer data diye replace korte parbe
  const data = [
    { day: "Mon", calls: 45 },
    { day: "Tue", calls: 62 },
    { day: "Wed", calls: 58 },
    { day: "Thu", calls: 75 },
    { day: "Fri", calls: 95 },
    { day: "Sat", calls: 82 },
    { day: "Sun", calls: 55 },
  ];

  // Total calls calculate
  const totalCalls = data.reduce((sum, item) => sum + item.calls, 0);

  return (
    <div
      style={{
        backgroundColor: "#0f1f3d",
        padding: "24px",
        borderRadius: "12px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#ffffff",
        width: "100%",
        margin: "0",
      }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h2 className="mb-2 text-[20px] font-normal text-white">
            Call Trends - {timeRange}
          </h2>
          <p className="text-sm font-normal text-[#90A1B9]">
            Total: {totalCalls} calls
          </p>
        </div>

        {/* Dropdown Button */}
        <div className="relative">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-[#1a2f4d] text-white border border-[#2a4063] rounded-md px-4 py-2 pr-8 text-sm cursor-pointer appearance-none outline-none bg-no-repeat bg-[right_12px_center]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 8L2 4h8z'/%3E%3C/svg%3E")`,
            }}
          >
            <option value="This Week">This Week</option>
            <option value="Last Week">Last Week</option>
            <option value="This Month">This Month</option>
            <option value="Last Month">Last Month</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5B9FFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1a2f4d" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="0"
            stroke="#1a3a5c"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#8b9bc1", fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#8b9bc1", fontSize: 12 }}
            ticks={[0, 25, 50, 75, 100]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1a2f4d",
              border: "1px solid #2a4063",
              borderRadius: "6px",
              color: "#ffffff",
            }}
            labelStyle={{ color: "#8b9bc1" }}
          />
          <Area
            type="monotone"
            dataKey="calls"
            stroke="#5B9FFF"
            strokeWidth={2}
            fill="url(#colorCalls)"
            animationDuration={1000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CallTrendSection;
