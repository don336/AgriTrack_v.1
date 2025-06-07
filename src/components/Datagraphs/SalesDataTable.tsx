const cropData = [
  {
    id: 1,
    crop: "Wheat",
    type: "Grain",
    quantity: "500",
    price: "2.5",
    Total: "500 ",
  },
  {
    id: 1,
    crop: "Wheat",
    type: "Grain",
    quantity: "500",
    price: "2.5",
    Total: "500 ",
  },
  {
    id: 1,
    crop: "Wheat",
    type: "Grain",
    quantity: "500",
    price: "2.5",
    Total: "500 ",
  },
  {
    id: 1,
    crop: "Wheat",
    type: "Grain",
    quantity: "500",
    price: "2.5",
    Total: "500 ",
  },
];
const SalesDataTable = () => {
  return (
    <div className="font-montserrat bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-center text-xl font-bold mb-4 font-raleway">
        SALES MANAGEMENT
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Crop Sold</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Price per kg</th>
              <th className="p-3 text-left">Total Revenue</th>
              <th className="p-3 text-left">Date Sold</th>
            </tr>
          </thead>
          <tbody>
            {cropData.map((crop) => (
              <tr key={crop.id} className="border-b border-gray-200">
                <td className="p-3">{crop.id}</td>
                <td className="p-3">{crop.crop}</td>
                <td className="p-3">{crop.type}</td>
                <td className="p-3">{crop.quantity}</td>
                <td className="p-3">{crop.price}</td>
                <td className="p-3">{crop.Total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesDataTable;
