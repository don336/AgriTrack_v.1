import React, { useEffect, useState } from "react";
import { Crop } from "../utils/Types";
import { useAppDispatch, useAppSelector } from "../utils/Redux/store";
import {
  getCrops,
  updateCrop,
} from "../Pages/Crops/CropReduxHandler/CropService";
import {
  FaCalendarAlt,
  FaLeaf,
  FaList,
  FaMapMarkerAlt,
  FaMinus,
  FaPlus,
  FaRuler,
  FaSeedling,
  FaStickyNote,
  FaWeight,
} from "react-icons/fa";
import CustomButton from "./CustomButton/CustomButton";

interface UpdateModalProps {
  crop: Crop | null;
  onClose: () => void;
  openModal: boolean;
}

const UpdateModal: React.FC<UpdateModalProps> = ({
  crop,
  openModal,
  onClose,
}) => {
  const [editedCrop, setEditedCrop] = useState<Crop | null>(crop);
  const dispatch = useAppDispatch();
  // reset the edited crop when the modal opens
  useEffect(() => {
    setEditedCrop(crop);
  }, [crop, openModal]);

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (!editedCrop) return;

    const { name, value } = e.target;
    setEditedCrop({ ...editedCrop, [name]: value });
  };

  // handle closing modal on Esc key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!openModal) return null; // Don't render if modal is not open

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dispatchedcropData: Crop = {
      ...editedCrop,
      _id: editedCrop?._id || "",
      name: editedCrop?.name || "",
      variety: editedCrop?.variety || "",
      plantingDate: editedCrop?.plantingDate || "",
      harvestDate: editedCrop?.harvestDate || "",
      fieldName: editedCrop?.fieldName || "",
      area: editedCrop?.area || 0,
      quantity: editedCrop?.quantity || 0,
      status: editedCrop?.status || "0",
      notes: editedCrop?.notes || "",
    };

    const dispatchUpdateCrop = dispatch(updateCrop(dispatchedcropData));

    dispatchUpdateCrop.then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        console.log("Crop updated successfully!");
        dispatch(getCrops()).then(() => {
          window.location.reload(); // Reload the page to reflect changes
        });
        onClose(); // Close the modal after successful update
      } else {
        console.error("Failed to update crop:", result.payload.error);
      }
    });
  };

  const statusOptions = [
    "Planned",
    "Planted",
    "Growing",
    "Ready to Harvest",
    "Harvested",
  ];
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      style={{ display: openModal ? "flex" : "none" }}
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Edit Crop Details
        </h2>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <FaSeedling className="mr-2 text-green-600" /> Crop Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={editedCrop?.name}
                onChange={handleInputChange}
                placeholder="e.g., Corn, Wheat, Rice"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <FaLeaf className="mr-2 text-green-600" /> Variety
              </label>
              <input
                type="text"
                name="variety"
                defaultValue={editedCrop?.variety}
                onChange={handleInputChange}
                placeholder="e.g., Sweet Corn, Hard Red"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <FaCalendarAlt className="mr-2 text-green-600" /> Planting Date
              </label>
              <input
                type="date"
                name="plantingDate"
                defaultValue={editedCrop?.plantingDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <FaCalendarAlt className="mr-2 text-green-600" /> Estimated
                Harvest Date
              </label>
              <input
                type="date"
                name="harvestDate"
                defaultValue={editedCrop?.harvestDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-green-600" /> Field
                Location
              </label>
              <select
                name="fieldName"
                defaultValue={editedCrop?.fieldName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                defaultValue={editedCrop?.area}
                onChange={handleInputChange}
                placeholder="e.g., 5.2"
                step="0.1"
                min="0.1"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <FaWeight className="mr-2 text-green-600" /> Quantity(kgs)
              </label>
              <input
                type="number"
                name="quantity"
                defaultValue={editedCrop?.quantity}
                onChange={handleInputChange}
                placeholder="e.g., 5.2"
                step="0.1"
                min="0.1"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    defaultValue={status}
                    checked={editedCrop?.status === status}
                    onChange={handleInputChange}
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
            <label className=" text-sm font-medium text-gray-700 flex items-center">
              <FaStickyNote className="mr-2 text-green-600" /> Additional Notes
            </label>
            <textarea
              name="notes"
              value={editedCrop?.notes}
              onChange={() => handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
              placeholder="Any special requirements or notes for this crop..."
            ></textarea>
          </div>

          <div className="flex justify-center pt-4 space-x-4">
            <CustomButton
              type="button"
              variant="primary"
              className="flex w-full bg-red-500 hover:bg-red-400 text-center justify-center items-center align-middle text-white"
              onClick={onClose}
            >
              <FaMinus className="mr-2" />
              Cancel
            </CustomButton>
            <CustomButton
              variant="primary"
              className="flex w-full bg-green-600 text-center justify-center items-center align-middle"
              type="submit"
            >
              <FaPlus className="mr-2" /> Update Crop
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
