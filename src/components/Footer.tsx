import React, { useState } from "react";
import { IoMailSharp } from "react-icons/io5";
import CustomButton from "./CustomButton/CustomButton";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white py-20 px-6 font-montserrat">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Newsletter Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <IoMailSharp className="text-green-500 text-2xl" />
              <h3 className="text-xl tracking-wide font-semibold font-roboto-condensed">
                STAY CONNECTED
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Subscribe to our newsletter to receive the latest updates and
              exclusive offers. No spam, guaranteed.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200"
                required
              />
              <CustomButton
                variant="primary"
                type="submit"
                className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 rounded-md transition-all duration-200 font-medium text-sm uppercase tracking-wider"
              >
                Subscribe
              </CustomButton>
            </form>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-8 tracking-wide flex items-center gap-3 font-Roboto_condensed">
              QUICK LINKS
              <span className="text-green-500 font-light">—</span>
            </h3>
            <nav>
              <ul className="space-y-4">
                {["HOME", "DASHBOARD", "SALES"].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-green-500 transition-colors duration-200 text-sm tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-8 tracking-wide flex items-center gap-3 font-Roboto_condensed">
              SERVICES
              <span className="text-green-500 font-light">—</span>
            </h3>
            <nav>
              <ul className="space-y-4">
                {["HOME", "DASHBOARD", "SALES"].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-green-500 transition-colors duration-200 text-sm tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-8 tracking-wide flex items-center gap-3 font-Roboto_condensed">
              LEGAL
              <span className="text-green-500 font-light">—</span>
            </h3>
            <nav>
              <ul className="space-y-4">
                {["HOME", "DASHBOARD", "SALES"].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-green-500 transition-colors duration-200 text-sm tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-20 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl font-bold tracking-wide font-Roboto_condensed">
              GREEN AGRI-TRACKER
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Green Agri-Tracker Uganda Limited.
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
