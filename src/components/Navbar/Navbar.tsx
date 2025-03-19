import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import NavLink from "./NavLink";
import CustomButton from "../CustomButton/CustomButton";
import { FaUserCircle } from "react-icons/fa";
import { useAppSelector } from "../../utils/Redux/store";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const authState = useAppSelector((state) => state.auth);
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);
  const { isAuthenticated } = authState;
  const NavMenu = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Crops", path: "/crops" },
    { name: "Sales", path: "/sales" },
  ];

  const handleDisplay = () => {
    setMenuDisplay(!menuDisplay);
  };

  const handleLogout = async () => {
    await localStorage.removeItem("jwt_Token");
    window.location.reload();
  };

  return (
    <nav className="  sticky top-0 z-50  w-full font-montserrat ">
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
            {NavMenu.map((navitem) => (
              <NavLink key={navitem.name} to={navitem.path}>
                {navitem.name}
              </NavLink>
            ))}

            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div>
                  <div className="flex flex-col items-center space-x-2">
                    <FaUserCircle
                      className="text-white text-2xl hover:text-gray-200"
                      onClick={handleDisplay}
                    />
                    <div
                      className="flex flex-col p-6 bg-gray-100 rounded-md translate-x-2 mt-5 space-y-2 absolute top-14 right-4 z-50 "
                      style={{ display: menuDisplay ? "block" : "none" }}
                    >
                      <Link
                        to="/profile"
                        className="relative font-medium  hover:text-green-400 transition-colors duration-200 before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:w-0 before:bg-green-400 before:transition-all hover:before:w-full"
                      >
                        Profile
                      </Link>
                      <CustomButton
                        variant="primary"
                        className="w-full bg-red-500 hover:bg-red-600"
                        onClick={handleLogout}
                      >
                        Logout
                      </CustomButton>
                    </div>
                  </div>
                </div>
              ) : (
                <CustomButton
                  className="px-7 py-1  rounded-full bg-[#48623F] text-white font-medium hover:bg-green-600/30 transition-colors duration-200"
                  variant="primary"
                >
                  <Link to="/login">LOGIN</Link>
                </CustomButton>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-lg text-white hover:text-gray-200 text-3xl"
          >
            {isMenuOpen ? <IoClose /> : <TiThMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-100 border-b text-[#333]">
            {NavMenu.map((navItem) => (
              <Link
                to={navItem.path}
                key={navItem.name}
                className="block px-3 py-2 rounded-lg  hover:text-green-400 hover:bg-slate-700"
              >
                {navItem.name}
              </Link>
            ))}

            <div className="flex items-center justify-between">
              {isAuthenticated ? (
                <div>
                  <h2>Account</h2>
                  <div className="flex flex-column"></div>
                </div>
              ) : (
                <CustomButton
                  className="px-7 py-1  rounded-full bg-[#48623F] text-white font-medium hover:bg-green-600/30 transition-colors duration-200"
                  variant="primary"
                >
                  <Link to="/login">LOGIN</Link>
                </CustomButton>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
