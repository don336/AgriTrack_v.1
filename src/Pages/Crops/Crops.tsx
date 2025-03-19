// CropsPage.tsx
import React, { useState, useEffect } from "react";
import {
  FaSortAmountDown,
  FaSortAmountUp,
  FaSearch,
  FaPlus,
  FaTrash,
  FaEdit,
  FaSeedling,
  FaCloudSun,
  FaFilter,
  FaFileExport,
  FaTable,
} from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";

// Define TypeScript interfaces
interface Crop {
  id: number;
  name: string;
  variety: string;
  plantingDate: string;
  harvestDate: string;
  field: string;
  area: number;
  yield: number;
  status: "Planned" | "Planted" | "Growing" | "Ready to Harvest" | "Harvested";
}

interface SortConfig {
  key: keyof Crop | null;
  direction: "ascending" | "descending";
}

const CropsPage: React.FC = () => {
  // Sample crops data
  const initialCrops: Crop[] = [
    {
      id: 1,
      name: "Corn",
      variety: "Sweet Corn",
      plantingDate: "2025-03-01",
      harvestDate: "2025-07-15",
      field: "North Field",
      area: 5.2,
      yield: 42.3,
      status: "Growing",
    },
    {
      id: 2,
      name: "Wheat",
      variety: "Hard Red",
      plantingDate: "2024-10-15",
      harvestDate: "2025-06-20",
      field: "East Field",
      area: 8.7,
      yield: 52.1,
      status: "Growing",
    },
    {
      id: 3,
      name: "Soybeans",
      variety: "Williams 82",
      plantingDate: "2025-05-01",
      harvestDate: "2025-10-10",
      field: "South Field",
      area: 6.4,
      yield: 0,
      status: "Planned",
    },
    {
      id: 4,
      name: "Potatoes",
      variety: "Russet",
      plantingDate: "2025-04-10",
      harvestDate: "2025-08-15",
      field: "West Field",
      area: 3.1,
      yield: 0,
      status: "Planted",
    },
    {
      id: 5,
      name: "Tomatoes",
      variety: "Roma",
      plantingDate: "2025-04-01",
      harvestDate: "2025-07-30",
      field: "Greenhouse 1",
      area: 0.5,
      yield: 0,
      status: "Planted",
    },
    {
      id: 6,
      name: "Lettuce",
      variety: "Butterhead",
      plantingDate: "2025-03-15",
      harvestDate: "2025-05-10",
      field: "Greenhouse 2",
      area: 0.3,
      yield: 0,
      status: "Ready to Harvest",
    },
    {
      id: 7,
      name: "Carrots",
      variety: "Nantes",
      plantingDate: "2025-02-20",
      harvestDate: "2025-05-25",
      field: "South Field",
      area: 1.2,
      yield: 0,
      status: "Growing",
    },
    {
      id: 8,
      name: "Rice",
      variety: "Jasmine",
      plantingDate: "2025-05-10",
      harvestDate: "2025-09-20",
      field: "Paddy Field",
      area: 4.6,
      yield: 0,
      status: "Planned",
    },
  ];

  const [crops, setCrops] = useState<Crop[]>(initialCrops);
  const [filteredCrops, setFilteredCrops] = useState<Crop[]>(initialCrops);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "ascending",
  });

  // Filter crops based on search term and status filter
  useEffect(() => {
    let result = [...crops];

    if (searchTerm) {
      result = result.filter(
        (crop) =>
          crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          crop.variety.toLowerCase().includes(searchTerm.toLowerCase()) ||
          crop.field.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "All") {
      result = result.filter((crop) => crop.status === statusFilter);
    }

    setFilteredCrops(result);
  }, [crops, searchTerm, statusFilter]);

  // Sort function
  const requestSort = (key: keyof Crop) => {
    let direction: "ascending" | "descending" = "ascending";

    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    setSortConfig({ key, direction });

    const sortedCrops = [...filteredCrops].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setFilteredCrops(sortedCrops);
  };

  // Get the appropriate status color
  const getStatusColor = (status: Crop["status"]) => {
    switch (status) {
      case "Planned":
        return "bg-gray-200";
      case "Planted":
        return "bg-blue-200";
      case "Growing":
        return "bg-green-200";
      case "Ready to Harvest":
        return "bg-yellow-200";
      case "Harvested":
        return "bg-purple-200";
      default:
        return "bg-gray-200";
    }
  };

  // Function to calculate total area
  const calculateTotalArea = () => {
    return filteredCrops.reduce((sum, crop) => sum + crop.area, 0).toFixed(1);
  };

  return (
    <>
      <div className="bg-gray-800">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8 font-montserrat">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-green-800 flex items-center font-raleway">
            <FaSeedling className="mr-2 " /> Crops Management
          </h1>
          <div className="flex space-x-2">
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex items-center">
              <FaPlus className="mr-2" /> Add Crop
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search crops..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <FaFilter className="text-gray-600" />
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="All">All Statuses</option>
                  <option value="Planned">Planned</option>
                  <option value="Planted">Planted</option>
                  <option value="Growing">Growing</option>
                  <option value="Ready to Harvest">Ready to Harvest</option>
                  <option value="Harvested">Harvested</option>
                </select>
              </div>
            </div>
            <div className="text-gray-600 flex items-center">
              <FaTable className="mr-2" />
              <span>
                {filteredCrops.length} crops | Total Area:{" "}
                {calculateTotalArea()} acres
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th
                    className="py-3 px-6 text-left cursor-pointer"
                    onClick={() => requestSort("name")}
                  >
                    <div className="flex items-center">
                      Crop
                      {sortConfig.key === "name" &&
                        (sortConfig.direction === "ascending" ? (
                          <FaSortAmountUp className="ml-1" />
                        ) : (
                          <FaSortAmountDown className="ml-1" />
                        ))}
                    </div>
                  </th>
                  <th className="py-3 px-6 text-left">Variety</th>
                  <th
                    className="py-3 px-6 text-left cursor-pointer"
                    onClick={() => requestSort("plantingDate")}
                  >
                    <div className="flex items-center">
                      Planting Date
                      {sortConfig.key === "plantingDate" &&
                        (sortConfig.direction === "ascending" ? (
                          <FaSortAmountUp className="ml-1" />
                        ) : (
                          <FaSortAmountDown className="ml-1" />
                        ))}
                    </div>
                  </th>
                  <th className="py-3 px-6 text-left">Harvest Date</th>
                  <th className="py-3 px-6 text-left">Field</th>
                  <th
                    className="py-3 px-6 text-left cursor-pointer"
                    onClick={() => requestSort("area")}
                  >
                    <div className="flex items-center">
                      Area (acres)
                      {sortConfig.key === "area" &&
                        (sortConfig.direction === "ascending" ? (
                          <FaSortAmountUp className="ml-1" />
                        ) : (
                          <FaSortAmountDown className="ml-1" />
                        ))}
                    </div>
                  </th>
                  <th className="py-3 px-6 text-left">Yield (acre)</th>
                  <th
                    className="py-3 px-6 text-left cursor-pointer"
                    onClick={() => requestSort("status")}
                  >
                    <div className="flex items-center">
                      Status
                      {sortConfig.key === "status" &&
                        (sortConfig.direction === "ascending" ? (
                          <FaSortAmountUp className="ml-1" />
                        ) : (
                          <FaSortAmountDown className="ml-1" />
                        ))}
                    </div>
                  </th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {filteredCrops.map((crop) => (
                  <tr
                    key={crop.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <FaSeedling className="mr-2 text-green-600" />
                        <span className="font-medium">{crop.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">{crop.variety}</td>
                    <td className="py-3 px-6 text-left">{crop.plantingDate}</td>
                    <td className="py-3 px-6 text-left">{crop.harvestDate}</td>
                    <td className="py-3 px-6 text-left">{crop.field}</td>
                    <td className="py-3 px-6 text-left">
                      {crop.area.toFixed(1)}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {crop.yield > 0 ? crop.yield.toFixed(1) : "-"}
                    </td>
                    <td className="py-3 px-6 text-left">
                      <span
                        className={`${getStatusColor(crop.status)} text-xs py-1 px-3 rounded-full`}
                      >
                        {crop.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center space-x-3">
                        <FaEdit className="text-blue-600 hover:text-blue-800 cursor-pointer" />
                        <FaTrash className="text-red-600 hover:text-red-800 cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCrops.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No crops match your search criteria
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
              <FaCloudSun className="mr-2" /> Status Overview
            </h2>
            <div className="space-y-3">
              {[
                "Planned",
                "Planted",
                "Growing",
                "Ready to Harvest",
                "Harvested",
              ].map((status) => {
                const count = crops.filter(
                  (crop) => crop.status === status
                ).length;
                const percentage =
                  Math.round((count / crops.length) * 100) || 0;
                return (
                  <div key={status} className="flex items-center">
                    <span
                      className={`${getStatusColor(status as Crop["status"])} w-3 h-3 rounded-full mr-2`}
                    ></span>
                    <span className="text-gray-700 flex-1">{status}</span>
                    <span className="text-gray-600">
                      {count} crops ({percentage}%)
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              Field Distribution
            </h2>
            <div className="space-y-3">
              {Array.from(new Set(crops.map((crop) => crop.field))).map(
                (field) => {
                  const fieldCrops = crops.filter(
                    (crop) => crop.field === field
                  );
                  const area = fieldCrops
                    .reduce((sum, crop) => sum + crop.area, 0)
                    .toFixed(1);
                  return (
                    <div key={field} className="flex items-center">
                      <span className="text-gray-700 flex-1">{field}</span>
                      <span className="text-gray-600">
                        {fieldCrops.length} crops | {area} acres
                      </span>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              Upcoming Harvests
            </h2>
            <div className="space-y-4">
              {crops
                .filter(
                  (crop) =>
                    crop.status === "Growing" ||
                    crop.status === "Ready to Harvest"
                )
                .sort(
                  (a, b) =>
                    new Date(a.harvestDate).getTime() -
                    new Date(b.harvestDate).getTime()
                )
                .slice(0, 5)
                .map((crop) => (
                  <div
                    key={crop.id}
                    className="border-b border-gray-100 pb-3 last:border-0"
                  >
                    <div className="font-medium">
                      {crop.name} ({crop.variety})
                    </div>
                    <div className="text-sm text-gray-500">
                      Harvest: {crop.harvestDate} | {crop.field}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CropsPage;
