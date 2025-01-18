import React from "react";
import { ButtonProps } from "../../utils/Types";
import { baseStyles, sizes, variants } from "./buttonConstants/constants";
import { cn } from "../../utils/cn";

const CustomButton: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  isLoading = false,
  className,
  disabled,
  onClick,
  ...props
}) => {
  const width = fullWidth ? "w-full" : "";
  return (
    <button
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        width,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center space-x-2">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default CustomButton;
