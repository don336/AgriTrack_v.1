import React from "react";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";

import { CardProps } from "../../utils/Types";
type TrendDirection = "up" | "down" | "neutral";

const DashboardCard = ({
  title,
  value,
  trend,
  icon,
  description,
  className = "",
}: CardProps) => {
  const getTrendColor = (direction: TrendDirection) => {
    switch (direction) {
      case "up":
        return "text-green-600 bg-green-50";
      case "down":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md ${className} font-montserrat`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>

      {/* Main Value */}
      <div className="mb-4">
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>

      {/* Trend Indicator */}
      {trend && (
        <div className="flex items-center">
          <div
            className={`flex items-center px-2.5 py-0.5 rounded-full text-sm ${getTrendColor(trend.direction)}`}
          >
            {trend.direction === "up" ? (
              <MdTrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <MdTrendingDown className="w-4 h-4 mr-1" />
            )}
            <span>{Math.abs(trend.value)}%</span>
          </div>
          <span className="text-sm text-gray-500 ml-2">vs. last month</span>
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
