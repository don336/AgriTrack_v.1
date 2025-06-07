import React, { useEffect } from "react";
import {
  BiLeaf as Leaf,
  BiDollar as DollarSign,
  BiMap as Map,
  BiLineChart as LineChartIcon,
} from "react-icons/bi";
import DashboardCard from "../../components/OverviewCards/Card";
import CustomPieChart from "../../components/Datagraphs/PieChart";
import SalesLineChart from "../../components/Datagraphs/LineChart";
import CropDatatable from "../../components/Datagraphs/CropDatatable";
import SalesDataTable from "../../components/Datagraphs/SalesDataTable";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useAppSelector } from "../../utils/Redux/store";

const Dashboard = () => {
  const authState = useAppSelector((state) => state.auth);
  const { isAuthenticated } = authState;

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = "/login";
    }
  }, [isAuthenticated]);
  return (
    <>
      <div className="bg-gray-800">
        <Navbar />
      </div>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Page Header */}

        {/* Overview Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Fields"
            value={130}
            description="Active farming areas"
            trend={{ direction: "up", value: 10 }}
            icon={<Map className="w-5 h-5" />}
          />

          <DashboardCard
            title="Crops Planted"
            value={1240}
            description="Across all fields"
            trend={{ direction: "up", value: 5.2 }}
            icon={<Leaf className="w-5 h-5" />}
          />

          <DashboardCard
            title="Total Revenue"
            value="$84,392"
            description="Year to date"
            trend={{ direction: "up", value: 8.1 }}
            icon={<DollarSign className="w-5 h-5" />}
          />

          <DashboardCard
            title="Harvest Ready"
            value={12}
            description="Next 14 days"
            trend={{ direction: "down", value: 3.4 }}
            icon={<LineChartIcon className="w-5 h-5" />}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Crop Distribution
            </h2>
            <div className="h-80">
              <CustomPieChart />
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Sales Trends
            </h2>
            <div className="h-80">
              <SalesLineChart />
            </div>
          </div>
        </div>

        {/* Data Tables Section */}
        <div className="grid grid-cols-1 gap-6">
          <div className=" p-6 rounded-lg shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Crop Management
              </h2>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
                Add New Crop
              </button>
            </div>
            <CropDatatable />
          </div>

          <div className=" p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Recent Sales
              </h2>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
                View All
              </button>
            </div>
            <SalesDataTable />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
