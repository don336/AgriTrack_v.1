// AddCrop.tsx
import React, { useEffect, useState } from "react";
import {
  FaPlus,
  FaSeedling,
  FaLeaf,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRuler,
  FaArrowLeft,
  FaList,
  FaStickyNote,
  FaWeight,
} from "react-icons/fa";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { cropDataType } from "../../utils/Types";
import {
  RootState,
  useAppSelector,
  useAppDispatch,
} from "../../utils/Redux/store";
import { useNavigate } from "react-router-dom";
import { addCrop } from "../../Pages/Crops/CropReduxHandler/CropService";
const AddCrop: React.FC = () => {
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
  const [cropData, setCropData] = useState<cropDataType>({
    name: "",
    variety: "",
    plantingDate: "",
    harvestDate: "",
    quantity: 0,
    status: "Planned", // Default status
    notes: "",
    fieldName: "",
    area: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setCropData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dispatchedcropData: cropDataType = {
      ...cropData,
      quantity: Number(cropData.quantity),
      area: Number(cropData.area),
    };

    const dispatchAddCrop = dispatch(addCrop(dispatchedcropData));

    if (dispatchAddCrop.requestId) {
      alert("Crop Added Successfully");
      navigate("/crops");
    }
  };

  const statusOptions = [
    "Planned",
    "Planted",
    "Growing",
    "Ready to Harvest",
    "Harvested",
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-montserrat">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link
            to="/crops"
            className="text-green-700 hover:text-green-800 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Crops
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-green-800 flex items-center mb-6">
          Add New Crop
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
                      name="name"
                      value={cropData.name}
                      onChange={handleChange}
                      placeholder="e.g., Corn, Wheat, Rice"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaLeaf className="mr-2 text-green-600" /> Variety
                    </label>
                    <input
                      type="text"
                      name="variety"
                      value={cropData.variety}
                      onChange={handleChange}
                      placeholder="e.g., Sweet Corn, Hard Red"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaCalendarAlt className="mr-2 text-green-600" /> Planting
                      Date
                    </label>
                    <input
                      type="date"
                      name="plantingDate"
                      value={cropData.plantingDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaCalendarAlt className="mr-2 text-green-600" />{" "}
                      Estimated Harvest Date
                    </label>
                    <input
                      type="date"
                      name="harvestDate"
                      value={cropData.harvestDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-green-600" /> Field
                      Location
                    </label>
                    <select
                      name="fieldName"
                      value={cropData.fieldName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    >
                      <option value="">Select Field</option>
                      <option value="North Field">North Field</option>
                      <option value="South Field">South Field</option>
                      <option value="East Field">East Field</option>
                      <option value="West Field">West Field</option>
                      <option value="Greenhouse 1">Greenhouse 1</option>
                      <option value="Greenhouse 2">Greenhouse 2</option>
                      <option value="Paddy Field">Paddy Field</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaRuler className="mr-2 text-green-600" /> Area (acres)
                    </label>
                    <input
                      type="number"
                      name="area"
                      value={cropData.area}
                      onChange={handleChange}
                      placeholder="e.g., 5.2"
                      step="0.1"
                      min="0.1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <FaWeight className="mr-2 text-green-600" /> Quantity(kgs)
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={cropData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 5.2"
                      step="0.1"
                      min="0.1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>

                {/* Status Radio Buttons */}
                <div className="space-y-2">
                  <label className=" text-sm font-medium text-gray-700 flex items-center">
                    <FaList className="mr-2 text-green-600" /> Crop Status
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {statusOptions.map((status) => (
                      <div key={status} className="flex items-center">
                        <input
                          type="radio"
                          id={status}
                          name="status"
                          value={status}
                          checked={cropData.status === status}
                          onChange={handleChange}
                          className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                        />
                        <label
                          htmlFor={status}
                          className="ml-2 text-sm text-gray-700 cursor-pointer"
                        >
                          {status}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 flex items-center">
                    <FaStickyNote className="mr-2 text-green-600" /> Additional
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    value={cropData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={3}
                    placeholder="Any special requirements or notes for this crop..."
                  ></textarea>
                </div>

                <div className="flex justify-center pt-4">
                  <CustomButton
                    variant="primary"
                    className="flex w-full bg-green-600 text-center justify-center items-center align-middle"
                    type="submit"
                  >
                    <FaPlus className="mr-2" /> Add Crop
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
                    Track your crops from planting to harvest and maximize your
                    yields with our comprehensive crop management system.
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

export default AddCrop;
