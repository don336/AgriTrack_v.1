import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  FaDollarSign,
  FaEdit,
  FaPlusCircle,
  FaSearch,
  FaSortAmountDown,
  FaSortAmountUp,
  FaTable,
  FaTrash,
} from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../utils/Redux/store";
import { Link, useNavigate } from "react-router-dom";
import { SalesInterface, SortConfig } from "../../utils/Types";
import { GetSales } from "./SalesReduxHandler/saleService";
import Footer from "../../components/Footer";
import UpdateModal from "../../components/UpdateModel";
import { salesField } from "../../utils/constants";

const Sales = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSale, setFilteredSales] = useState<SalesInterface[]>([]);
  const [sales, setSales] = useState<SalesInterface[]>([]);
  const [saleToBeUpdated, setSaleToBeUpdated] = useState<SalesInterface>({
    crop_name: "",
    customer_name: "",
    customer_contact: "",
    quantity: 0,
    unit_price: 0,
    total_price: 0,
    sale_date: "",
    payment_method: "",
    notes: "",
    _id: "",
  });

  const [openModel, setOpenModel] = useState(false);

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "ascending",
  });

  const requestSort = (key: keyof SalesInterface) => {
    let direction: "ascending" | "descending" = "ascending";

    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    setSortConfig({ key, direction });

    const sortedSales = [...filteredSale].sort((a, b) => {
      const valA = a[key] ?? "";
      const valB = b[key] ?? "";

      if (valA < valB) return direction === "ascending" ? -1 : 1;
      if (valA > valB) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setFilteredSales(sortedSales);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authState = useAppSelector((state) => state.auth);
  const salesData = useAppSelector((state) => state.sales.sales);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      navigate("/login");
    } else {
      dispatch(GetSales());
    }
  }, [authState.isAuthenticated, dispatch, navigate]);

  useEffect(() => {
    if (salesData?.sales) {
      setSales(salesData.sales);
    }
  }, [salesData]);

  useEffect(() => {
    let result = [...sales];

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(
        (sale) =>
          sale.crop_name.toLowerCase().includes(lowerTerm) ||
          sale.customer_name.toLowerCase().includes(lowerTerm) ||
          sale.customer_contact.includes(lowerTerm) ||
          sale.payment_method.toLowerCase().includes(lowerTerm)
      );
    }

    setFilteredSales(result);
  }, [sales, searchTerm]);

  const handleEdit = (sale: SalesInterface) => {
    setOpenModel(true);
    setSaleToBeUpdated(sale);
  };

  const handleCloseModal = () => {
    setOpenModel(false);
    setSaleToBeUpdated({
      crop_name: "",
      customer_name: "",
      customer_contact: "",
      quantity: 0,
      unit_price: 0,
      total_price: 0,
      sale_date: "",
      payment_method: "",
      notes: "",
      _id: "",
    });
  };

  const handleDelete = () => {};

  return (
    <>
      <div className="bg-gray-800">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8 font-montserrat">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-green-800 flex items-center font-raleway">
            <FaDollarSign className="mr-2" />
            Sales Management
          </h1>
          <Link
            to="/add-sale"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex items-center"
          >
            <FaPlusCircle className="mr-2" />
            Add Sale
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search sales..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="text-gray-600 flex items-center">
              <FaTable className="mr-2" />
              <span>Sales Revenue: USD</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th
                    className="py-3 px-6 text-left cursor-pointer"
                    onClick={() => requestSort("customer_name")}
                  >
                    <div className="flex items-center">
                      Customer Name
                      {sortConfig.key === "customer_name" &&
                        (sortConfig.direction === "ascending" ? (
                          <FaSortAmountUp className="ml-1" />
                        ) : (
                          <FaSortAmountDown className="ml-1" />
                        ))}
                    </div>
                  </th>
                  <th className="py-3 px-6 text-left">Customer Contact</th>
                  <th className="py-3 px-6 text-left">Crop</th>
                  <th
                    className="py-3 px-6 text-left cursor-pointer"
                    onClick={() => requestSort("quantity")}
                  >
                    Quantity
                  </th>
                  <th
                    className="py-3 px-6 text-left cursor-pointer"
                    onClick={() => requestSort("unit_price")}
                  >
                    Unit Price
                  </th>
                  <th
                    className="py-3 px-6 text-left cursor-pointer"
                    onClick={() => requestSort("total_price")}
                  >
                    Total Price
                  </th>
                  <th className="py-3 px-6 text-left">Payment Method</th>
                  <th className="py-3 px-6 text-left">Notes</th>
                  <th className="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {filteredSale.map((sale) => (
                  <tr
                    key={sale._id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6">{sale.customer_name}</td>
                    <td className="py-3 px-6">{sale.customer_contact}</td>
                    <td className="py-3 px-6">{sale.crop_name}</td>
                    <td className="py-3 px-6">{sale.quantity} kg</td>
                    <td className="py-3 px-6">USD {sale.unit_price} /kg</td>
                    <td className="py-3 px-6">USD {sale.total_price}</td>
                    <td className="py-3 px-6">{sale.payment_method}</td>
                    <td className="py-3 px-6">{sale.notes}</td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex justify-center space-x-3">
                        <FaEdit
                          className="text-blue-600 hover:text-blue-800 cursor-pointer"
                          onClick={() => handleEdit(sale)}
                        />
                        <FaTrash
                          className="text-red-600 hover:text-red-800 cursor-pointer"
                          onClick={handleDelete}
                        />

                        <UpdateModal
                          onClose={handleCloseModal}
                          entity={saleToBeUpdated}
                          openModal={openModel}
                          fields={salesField}
                          title="Edit Sale"
                          onSubmit={async (sale) => {
                            console.log(sale, "123456");
                            // await dispatch(updateCrop(crop));
                            // await dispatch(getCrops());
                            // window.location.reload();
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sales;
