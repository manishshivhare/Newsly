import React from "react";
import companyLogo from "../assets/newslyLogo.png";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-800 text-white py-8 bg-white border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="h-8 w-auto object-contain mr-2 ml-5 filter dark:invert"
          />
        </div>
      </div>

      <div className="text-center mt-4 text-sm text-gray-400">
        © 2024 Newsly. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
