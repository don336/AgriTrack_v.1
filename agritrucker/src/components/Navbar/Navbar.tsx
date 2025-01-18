import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import NavLink from "./NavLink";
import CustomButton from "../CustomButton/CustomButton";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className=" backdrop-blur-sm sticky top-0 z-50  w-full">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-playfair">
            <span className="text-xl font-bold text-white tracking-tight">
              GREEN AGRI-TRACKER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/sales">Sales</NavLink>

            <CustomButton
              className="px-7 py-1  rounded-full bg-[#48623F] text-white font-medium hover:bg-green-600/30 transition-colors duration-200"
              variant="primary"
            >
              <Link to="/login">LOGIN</Link>
            </CustomButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-700"
          >
            {isMenuOpen ? <IoClose /> : <TiThMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 border-b border-slate-700">
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg text-gray-100 hover:text-green-400 hover:bg-slate-700"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-lg text-gray-100 hover:text-green-400 hover:bg-slate-700"
            >
              Dashboard
            </Link>
            <Link
              to="/sales"
              className="block px-3 py-2 rounded-lg text-gray-100 hover:text-green-400 hover:bg-slate-700"
            >
              Sales
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-center rounded-lg bg-green-500 text-white font-medium hover:bg-green-600"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
