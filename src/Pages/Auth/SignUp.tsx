import React, { useEffect, useState } from "react";
import { IoMailSharp, IoPersonOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import CustomButton from "../../components/CustomButton/CustomButton";
import { register } from "../Auth/AuthReduxHandler/authService";
import { useNavigate } from "react-router-dom";
import {
  RootState,
  useAppSelector,
  useAppDispatch,
} from "../../utils/Redux/store";
import { userDataType } from "../../utils/Types";

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    password: false,
    confirmPassword: false,
  });

  const authState = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (authState?.isAuthenticated) {
      navigate("/dashboard");
    }
    if (authState?.error) {
      alert(authState.error);
      window.location.reload();
    }
  }, [authState]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { password, confirmPassword, firstName, email, lastName, phone } =
      formData;

    if (password !== confirmPassword) {
      window.alert("The passwords are not the same");
    }

    const userData: userDataType = {
      firstName,
      email,
      lastName,
      phone,
      password,
    };

    dispatch(register(userData));

    console.log("Sign up attempt:", formData);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12 font-montserrat">
      <div className="max-w-xl w-full space-y-8 bg-gray-800 p-8 md:p-10 rounded-lg shadow-xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white tracking-wide mb-2">
            Create Account
          </h2>
          <p className="text-gray-300 text-sm">
            Join us and start tracking your agricultural progress
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-300 block"
              >
                First Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoPersonOutline className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200"
                  placeholder="First name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-300 block"
              >
                Last Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoPersonOutline className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200"
                  placeholder="Last name"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-300 block"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoMailSharp className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-300 block"
            >
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BsTelephone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 block"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiLockPasswordLine className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPasswords.password ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200"
                  placeholder="Create password"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("password")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPasswords.password ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-300 block"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiLockPasswordLine className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPasswords.confirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200"
                  placeholder="Confirm password"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPasswords.confirmPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-600 rounded bg-gray-700"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
              I agree to the{" "}
              <a href="#" className="text-green-500 hover:text-green-400">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-green-500 hover:text-green-400">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Sign Up Button */}
          <CustomButton
            variant="primary"
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 uppercase tracking-wide"
          >
            Create Account
          </CustomButton>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-300">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-green-500 hover:text-green-400 transition-colors duration-200"
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
