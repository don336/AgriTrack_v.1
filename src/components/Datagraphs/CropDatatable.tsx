import React from "react";

const cropData = [
  {
    id: 1,
    name: "Wheat",
    type: "Grain",
    planted: "2024-01-10",
    harvest: "2024-06-15",
    yield: "500 kg",
  },
  {
    id: 2,
    name: "Corn",
    type: "Cereal",
    planted: "2024-02-20",
    harvest: "2024-08-25",
    yield: "800 kg",
  },
  {
    id: 3,
    name: "Rice",
    type: "Grain",
    planted: "2024-03-05",
    harvest: "2024-09-10",
    yield: "700 kg",
  },
  {
    id: 4,
    name: "Barley",
    type: "Cereal",
    planted: "2024-04-12",
    harvest: "2024-10-20",
    yield: "650 kg",
  },
];
const CropDatatable = () => {
  return (
    <div className="font-montserrat bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-center text-xl font-bold mb-4 font-raleway">
        CROP MANAGEMENT
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Crop Name</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Planted Date</th>
              <th className="p-3 text-left">Harvest Date</th>
              <th className="p-3 text-left">Yield</th>
            </tr>
          </thead>
          <tbody>
            {cropData.map((crop) => (
              <tr key={crop.id} className="border-b border-gray-200">
                <td className="p-3">{crop.id}</td>
                <td className="p-3">{crop.name}</td>
                <td className="p-3">{crop.type}</td>
                <td className="p-3">{crop.planted}</td>
                <td className="p-3">{crop.harvest}</td>
                <td className="p-3">{crop.yield}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CropDatatable;
