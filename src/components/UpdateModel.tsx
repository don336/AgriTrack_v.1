import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton/CustomButton";

export interface FieldConfig {
  label: string;
  name: string;
  type: "text" | "number" | "date" | "select" | "radio" | "textarea";
  icon?: React.ReactNode;
  options?: string[]; // For select/radio
  placeholder?: string;
  step?: string;
  min?: string;
}

interface UpdateModalProps<T> {
  entity: T | null;
  onClose: () => void;
  openModal: boolean;
  onSubmit: (updated: T) => Promise<void>;
  fields: FieldConfig[];
  title?: string;
}

const UpdateModal = <T extends { [key: string]: any }>({
  entity,
  onClose,
  openModal,
  onSubmit,
  fields,
  title = "Update Details",
}: UpdateModalProps<T>) => {
  const [edited, setEdited] = useState<T | null>(entity);

  useEffect(() => {
    setEdited(entity);
  }, [entity, openModal]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    if (!edited) return;
    const { name, value } = e.target;
    setEdited({ ...edited, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (edited) {
      onSubmit(edited).then(onClose).catch(console.error);
    }
  };

  if (!openModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.map((field) => {
              const value = edited?.[field.name] ?? "";
              const sharedProps = {
                name: field.name,
                value,
                onChange: handleChange,
                className:
                  "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",
              };

              return (
                <div key={field.name} className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    {field.icon && (
                      <span className="mr-2 text-green-600">{field.icon}</span>
                    )}
                    {field.label}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      {...sharedProps}
                      rows={3}
                      placeholder={field.placeholder}
                    ></textarea>
                  ) : field.type === "select" ? (
                    <select {...sharedProps}>
                      <option value="">Select</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "radio" ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {field.options?.map((opt) => (
                        <label key={opt} className="flex items-center">
                          <input
                            type="radio"
                            name={field.name}
                            value={opt}
                            checked={value === opt}
                            onChange={handleChange}
                            className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                          />
                          <span className="ml-2 text-sm text-gray-700 cursor-pointer">
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <input
                      {...sharedProps}
                      type={field.type}
                      placeholder={field.placeholder}
                      step={field.step}
                      min={field.min}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center pt-4 space-x-4">
            <CustomButton
              type="button"
              variant="primary"
              className="flex w-full bg-red-500 hover:bg-red-400 text-white justify-center"
              onClick={onClose}
            >
              Cancel
            </CustomButton>
            <CustomButton
              variant="primary"
              className="flex w-full bg-green-600 text-white justify-center"
              type="submit"
            >
              Save Changes
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
