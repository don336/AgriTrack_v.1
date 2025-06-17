// AddCrop.tsx
import React, { useEffect, useState } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { SalesInterface } from "../../../utils/Types";
import { useNavigate } from "react-router-dom";
import { AddSale } from "../SalesReduxHandler/saleService";
import {
  FaPlus,
  FaSeedling,
  FaLeaf,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRuler,
  FaArrowLeft,
  FaPen,
} from "react-icons/fa";
import {
  RootState,
  useAppSelector,
  useAppDispatch,
} from "../../../utils/Redux/store";

const AddSaleComp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authState = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      navigate("/login");
    }
    if (authState?.error) {
      alert(authState.error);
      window.location.reload();
    }
  }, [authState.isAuthenticated]);
  const [saleData, setSaleData] = useState<SalesInterface>({
    crop_name: "",
    customer_name: "",
    customer_contact: "",
    quantity: 0, // in kg
    unit_price: 0, // per kg
    total_price: 0,
    sale_date: "",
    payment_method: "",
    notes: "",
  });

  useEffect(() => {
    const total_amount = saleData.unit_price * saleData.quantity;
    setSaleData((prev) => ({ ...prev, total_price: total_amount }));
  }, [saleData.quantity, saleData.unit_price]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setSaleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dispatchSaleData: SalesInterface = {
      ...saleData,
      quantity: Number(saleData.quantity),
      unit_price: Number(saleData.unit_price),
    };

    const dispatchAddSale = dispatch(AddSale(dispatchSaleData)).unwrap();

    dispatchAddSale
      .then(() => {
        alert("Sale Added Successfully");
        navigate("/sales");
      })
      .catch((err) => {
        console.error("Failed to add sale:", err);
        alert("Error adding sale");
      });

    console.log(saleData);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-montserrat">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link
            to="/sales"
            className="text-green-700 hover:text-green-800 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Sales
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-green-800 flex items-center mb-6">
          Add New Sale
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Form Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaSeedling className="mr-2 text-green-600" /> Crop Name
                    </label>
                    <input
                      type="text"
                      name="crop_name"
                      value={saleData.crop_name}
                      onChange={handleChange}
                      placeholder="e.g., Corn, Wheat, Rice"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaLeaf className="mr-2 text-green-600" /> Customer Name
                    </label>
                    <input
                      type="text"
                      name="customer_name"
                      value={saleData.customer_name}
                      onChange={handleChange}
                      placeholder="e.g., Sweet Corn, Hard Red"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaLeaf className="mr-2 text-green-600" /> Customer
                      Contact
                    </label>
                    <input
                      type="text"
                      name="customer_contact"
                      value={saleData.customer_contact}
                      onChange={handleChange}
                      placeholder="e.g., +256770302731, +254745496783"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaCalendarAlt className="mr-2 text-green-600" /> Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={saleData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaCalendarAlt className="mr-2 text-green-600" /> Unit
                      Price
                    </label>
                    <input
                      type="number"
                      name="unit_price"
                      value={saleData.unit_price}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-green-600" /> Total
                      Price
                    </label>
                    <input
                      type="Number"
                      disabled
                      name="total_Price"
                      value={saleData.total_price}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-green-600" /> Sale
                      Date
                    </label>
                    <input
                      type="Date"
                      name="sale_date"
                      value={saleData.sale_date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaRuler className="mr-2 text-green-600" /> Payment Method
                    </label>
                    <input
                      type="text"
                      name="payment_method"
                      value={saleData.payment_method}
                      onChange={handleChange}
                      placeholder="e.g., mobile money, Credit, Visa Card, Bank Transfer"
                      step="0.1"
                      min="0.1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <FaPen className="mr-2 text-green-600" /> Notes
                  </label>
                  <textarea
                    name="notes"
                    value={saleData.notes}
                    onChange={handleChange}
                    placeholder="e.g., mobile money, Credit, Visa Card, Bank Transfer"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <CustomButton
                    variant="primary"
                    className="flex w-full bg-green-600 text-center justify-center items-center align-middle"
                    type="submit"
                  >
                    <FaPlus className="mr-2" /> Add Sale
                  </CustomButton>
                </div>
              </form>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="relative h-full">
                <img
                  src="/african-man-harvesting-vegetables.jpg"
                  alt="African man harvesting vegetables"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h2 className="text-white text-2xl font-bold mb-2">
                    Growing Better Crops
                  </h2>
                  <p className="text-white opacity-90 mb-4">
                    Track your sales from harvesting to selling and maximize
                    your yields with our comprehensive crop management system.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-green-600/90 text-white px-3 py-1 rounded-full text-sm">
                      Sustainable Farming
                    </span>
                    <span className="bg-green-600/90 text-white px-3 py-1 rounded-full text-sm">
                      Improved Yields
                    </span>
                    <span className="bg-green-600/90 text-white px-3 py-1 rounded-full text-sm">
                      Data-Driven
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSaleComp;
