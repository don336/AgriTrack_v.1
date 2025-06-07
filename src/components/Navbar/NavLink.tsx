import React from "react";
import { NavLinkProps } from "../../utils/Types";
import { Link } from "react-router-dom";
const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="relative font-medium text-gray-100 hover:text-green-400 transition-colors duration-200 before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:w-0 before:bg-green-400 before:transition-all hover:before:w-full"
    >
      {children}
    </Link>
  );
};

export default NavLink;
