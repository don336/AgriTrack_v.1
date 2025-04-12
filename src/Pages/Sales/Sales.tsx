import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  FaDollarSign,
  FaEdit,
  FaFilter,
  FaPlusCircle,
  FaSearch,
  FaTable,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { SalesInterface } from "../../utils/Types";

const Sales = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSale, setFilteredSales] = useState<SalesInterface[]>([]);
  //   const requestSort = (key: string) => {
  // let direction ="ascending";
  // if(sortingKey===key && sortingKey="ascending"){
  //   direction = "descending"
  // }
  // else if(sortingKey===key && sortingKey==="descending"){
  //   direction = "ascending"
  // }

  useEffect(() => {
    let result = [...salesArray];

    if (searchTerm) {
      result = result.filter(
        (sale) =>
          sale.crop_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sale.customer_name
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase()) ||
          sale.customer_contact.includes(searchTerm.toLowerCase()) ||
          sale.payment_method.includes(searchTerm.toLowerCase())
      );
    }
    setFilteredSales(result);
  }, [salesArray, searchTerm]);
  return (
    <>
      <div className="bg-gray-800">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8 font-montserrat">
        <div className="flex items-center justify-between mb-6 ">
          <h1 className="text-3xl font-bold text-green-800 flex items-center font-raleway">
            <FaDollarSign className=" mr-2" />
            Sales Management
          </h1>
          <div className="flex space-x-2">
            <Link
              to="add-sale"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex m-auto align-middle items-center"
            >
              <FaPlusCircle className="mr-2" />
              Add Sale
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search sales......"
                  className="pl-10 pr-4 py-2 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="text-gray-600 flex items-center">
              <FaTable className="mr-2" />
              <span>Sales Revenue: {""}USD</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th
                    className="py-3 px-6 text-left cursor-pointer"
                    // onClick={()=>requestSort("name")}
                  >
                    <div className="flex items-center">
                      Customer Name
                      {/* {sortConfig.key === "name" &&
                                                (sortConfig.direction === "ascending" ? (
                                                  <FaSortAmountUp className="ml-1" />
                                                ) : (
                                                  <FaSortAmountDown className="ml-1" />
                                                ))} */}
                    </div>
                  </th>
                  <th className="py-3 px-6 text-left">Customer Contact</th>
                  <th className="py-3 px-6 text-left">Crop</th>
                  <th className="py-3 px-6 text-left cursor-pointer">
                    Quantity
                  </th>
                  <th
                    className="py-3 px-6 text-left"
                    // onClick={() => requestSort("name")}
                  >
                    <div className="flex items-center">
                      Unit Price
                      {/* {sortConfig.key === "name" &&
                                                (sortConfig.direction === "ascending" ? (
                                                  <FaSortAmountUp className="ml-1" />
                                                ) : (
                                                  <FaSortAmountDown className="ml-1" />
                                                ))} */}
                    </div>
                  </th>
                  <th
                    className="py-3 px-6 text-left" // onClick={() => requestSort("name")}
                  >
                    <div className="flex items-center">
                      Total Price
                      {/* {sortConfig.key === "name" &&
                                                (sortConfig.direction === "ascending" ? (
                                                  <FaSortAmountUp className="ml-1" />
                                                ) : (
                                                  <FaSortAmountDown className="ml-1" />
                                                ))} */}
                    </div>
                  </th>
                  <th className="py-3 px-6 text-left cursor-pointer">
                    Payment Method
                  </th>
                  <th className="py-3 px-6 text-left cursor-pointer">Notes</th>
                  <th className="py-3 px-6 text-left cursor-pointer">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {filteredSale.map((sale) => (
                  <tr
                    key={sale.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">
                      {sale.customer_name}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {sale.customer_contact}
                    </td>
                    <td className="py-3 px-6 text-left">{sale.crop_name}</td>
                    <td className="py-3 px-6 text-left">{sale.quantity} kg</td>
                    <td className="py-3 px-6 text-left">
                      USD {sale.unit_price} /kg
                    </td>
                    <td className="py-3 px-6 text-left">
                      USD {sale.total_price}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {sale.payment_method}
                    </td>
                    <td className="py-3 px-6 text-left">{sale.notes}</td>
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
        </div>
      </div>
    </>
  );
};

export default Sales;
const salesArray = [
  {
    id: 1,
    crop_id: 101,
    crop_name: "Maize",
    customer_name: "John Doe",
    customer_contact: "+254712345678",
    quantity: 500, // in kg
    unit_price: 25, // per kg
    total_price: 12500,
    sale_date: "2025-04-05T10:30:00Z",
    payment_method: "Mobile Money",
    notes: "Payment received in full",
    salesperson_id: 11,
    created_at: "2025-04-05T10:35:00Z",
    updated_at: "2025-04-05T10:35:00Z",
  },
  {
    id: 2,
    crop_id: 102,
    crop_name: "Beans",
    customer_name: "Mary Wanjiku",
    customer_contact: "+254798765432",
    quantity: 200,
    unit_price: 80,
    total_price: 16000,
    sale_date: "2025-04-06T14:00:00Z",
    payment_method: "Cash",
    notes: "Delivered on site",
    salesperson_id: 12,
    created_at: "2025-04-06T14:10:00Z",
    updated_at: "2025-04-06T14:10:00Z",
  },
  {
    id: 3,
    crop_id: 103,
    crop_name: "Tomatoes",
    customer_name: "James Otieno",
    customer_contact: "+254711112222",
    quantity: 100,
    unit_price: 50,
    total_price: 5000,
    sale_date: "2025-04-07T09:00:00Z",
    payment_method: "Bank Transfer",
    notes: "",
    salesperson_id: 11,
    created_at: "2025-04-07T09:05:00Z",
    updated_at: "2025-04-07T09:05:00Z",
  },
];
