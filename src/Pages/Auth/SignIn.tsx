import { useEffect, useState } from "react";
import { IoMailSharp } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useAppDispatch, useAppSelector } from "../../utils/Redux/store";
import { Login } from "./AuthReduxHandler/authService";
import { userDataType } from "../../utils/Types";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
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
    const { email, password } = formData;
    const UserData: userDataType = {
      email,
      password,
    };

    dispatch(Login(UserData));
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12 font-montserrat">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 md:p-10 rounded-lg shadow-xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white tracking-wide mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-300 text-sm">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Email Field */}
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

          {/* Password Field */}
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
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-600 rounded bg-gray-700"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Remember me
              </label>
            </div>
            <div>
              <a
                href="#"
                className="text-sm text-green-500 hover:text-green-400 transition-colors duration-200"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Login Button */}
          <CustomButton
            variant="primary"
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 uppercase tracking-wide"
          >
            Sign In
          </CustomButton>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-300">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-medium text-green-500 hover:text-green-400 transition-colors duration-200"
            >
              Sign up now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
